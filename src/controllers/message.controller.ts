import {
  Response,
  Request,
  Controller,
  Get,
  Post,
} from '@decorators/express'
import { body } from 'express-validator'

import MessageFakeRepository from '../components/message/infrastructure/persistence/message_fake_repository'
import MessageSchema from '../models/message_schema'
import { ValidateFields } from '../middlewares/validate_fields'


const repo = new MessageFakeRepository()

const new_message_validations: any[] = [
  body('id', 'The id field is required and needs to be an UUID v4').isUUID(4),
  body('user_name', 'The user_name field is required and needs to be a string at lieat 3 characters')
    .isString().isLength({ min: 3 }),
  body('content', 'The content field is required and needs to be a valid string').isString(),
  ValidateFields,
]

@Controller('/')
export class MessageController {
  private base_route: string


  constructor() {
    this.base_route = '/messages'

  }

  // @ts-ignore
  @Get('/')
  async listAll(@Response() res) {
    const messages = await repo.list()
    res.status(200).json({
      users: messages,
    })
  }


  @Post('/', new_message_validations)
  async newMessage(@Request() req, @Response() res) {
    const rbody = req.body
    try {
      const message = new MessageSchema(rbody)
      await message.save()
      res.status(201).json({
        message: 'message created!',
      })
    } catch (error) {
      res.status(500).json({
        message: 'Can not save the message',
        error,
      })
    }
  }

  @Post('/find')
  async getMessage(@Request() req, @Response() res) {
    const content_query = req.body.content_query
    console.log(req)
    try {
      const messages = await repo.find(content_query)
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
