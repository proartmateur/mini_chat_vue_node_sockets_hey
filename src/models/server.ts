import express, { Application, Request, Response } from "express";
import path from "path";
import cors from "cors";

import index_routes from "../routes/index.routes";
import user_routes from "../routes/user.routes";
import user_decorator_routes from "../routes/api/user.decorator.routes";
import db from "../db/connection";

class Server {
  private port: string;
  private base_route: string;
  private public_dir: string;

  private app: Application;
  private public_route: string;

  constructor() {
    this.port = process.env.PORT || "3000";
    this.base_route = `/${process.env.APP_BASE_ROUTE}`;
    this.public_route = "/public";
    this.public_dir = path.resolve(__dirname, "../", "public");

    this.dbConnection();
    this.app = express();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("DB_OK: La base de datos está funcionando!");
    } catch (error) {
      throw new Error(`DB_ERROR: ${error}`);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    const static_base_route = `${this.base_route}${this.public_route}`;
    this.app.use(static_base_route, express.static(this.public_dir));
  }

  routes() {
    this.app.use(`${this.base_route}`, index_routes);
    this.app.use(`${this.base_route}/user`, user_routes);

    // Decorator controllers
    this.app.use(`${this.base_route}/api`, user_decorator_routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`HTTP_OK: App listening at http://localhost:${this.port}`);
    });
  }
}

export default Server;
