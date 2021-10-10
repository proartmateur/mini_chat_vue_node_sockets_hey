import express, { Application, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import http from 'http'
import socketio from 'socket.io'

import index_routes from '../routes/index.routes'
import messages_routes from '../routes/api/message.routes'
import mongo_db_connect from '../db/mongo_connection'
import { Sockets } from './sockets'

class Server {
  private port: string
  private base_route: string
  private public_dir: string

  private app: Application
  private public_route: string

  private io: any
  private server: any

  constructor() {
    this.port = process.env.PORT || '3000'
    this.base_route = `/${process.env.APP_BASE_ROUTE}`
    this.public_route = '/public'
    this.public_dir = path.resolve(__dirname, '../', 'public')


    this.dbConnection()
    this.app = express()
    this.server = new http.Server(this.app)
    this.io = new socketio.Server(this.server, {
      cors: {
        origin: 'http://localhost:3006',

      },
    })

    this.middlewares()
    this.routes()

    this.sockets()
  }

  async dbConnection() {
    await mongo_db_connect()
  }

  sockets() {
    const sockets = new Sockets(this.io)
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())

    const static_base_route = `${this.base_route}${this.public_route}`
    this.app.use(static_base_route, express.static(this.public_dir))
  }

  routes() {
    this.app.use(`${this.base_route}`, index_routes)
    this.app.use(`${this.base_route}/api/messages`, messages_routes)
  }

  listen() {
    // this.app.listen(this.port, () => {
    //   console.log(`HTTP_OK: App listening at http://localhost:${this.port}`)
    // })
    this.server.listen(this.port, () => {
      console.log(`HTTP_OK: App listening at http://localhost:${this.port}`)
    })
  }
}

export default Server
