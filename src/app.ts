import 'module-alias/register';
import dotenv from "dotenv";
const global_config = dotenv.config();

import Server from "./models/server";

const server = new Server();
server.listen();