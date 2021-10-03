import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return [
    {
      id: 'asdfgqweroiou',
      user_name: 'Enrique Nieto Martínez'
    }
  ]
})

export default router
