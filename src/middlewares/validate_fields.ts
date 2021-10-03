import {
  Middleware, Response,
  Request,
} from '@decorators/express'
import { NextFunction } from 'express'
import { validationResult } from 'express-validator'

export class ValidateFields implements Middleware {
  // @ts-ignore
  public use(@Request req, @Response() res, next: NextFunction): void {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
}

