import {
  Response,
  Params,
  Controller,
  Get,
  attachControllers,
  Middleware,
} from '@decorators/express'

import UserSequelizeRepository from '../components/user/infrastructure/persistence/user_sequelize_repository'
const repo = new UserSequelizeRepository()

@Controller('/')
export class UsersDecoratorController {
  private base_route: string
  constructor() {
    this.base_route = '/learning_node'
  }

  @Get('/users')
  async listAll(@Response() res) {
    const users = await repo.list()
    res.status(200).json({
      users,
    })
  }

  @Get('/users/:id')
  async getData(@Response() res, @Params('id') id: number) {
    try {
      const user = await repo.find(id);
      if (!user) {
        res.status(404).json({
          error: 'No existe el usuario con id: ' + id,
        })
      }
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        error: 'Problema con la búsqueda. :(',
      })
    }
  }
}
