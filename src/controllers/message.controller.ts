import {
  Response,
  Request,
  Params,
  Controller,
  Get,
  attachControllers,
  Middleware, Post,
} from '@decorators/express'
import MessageFakeRepository from '../components/message/infrastructure/persistence/message_fake_repository'


const repo = new MessageFakeRepository();

@Controller('/')
export class MessageController {
  private base_route: string
  constructor() {
    this.base_route = '/messages'
  }

  @Get('/')
  async listAll(@Response() res) {
    const messages = await repo.list()
    res.status(200).json({
      users: messages,
    })
  }

  @Post('/find')
  async getData(@Request() req, @Response() res) {
    const content_query = req.body.content_query
    console.log(req)
    try {
      const messages = await repo.find(content_query);
      if (!messages) {
        res.status(404).json({
          error: 'No se encontraron mensajes: ' + content_query,
        })
      }
      res.status(200).json(messages)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        error: 'Problema con la búsqueda. :(',
      })
    }
  }
}
