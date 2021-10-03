import dotenv from 'dotenv'
const global_config = dotenv.config()

import jest from 'ts-jest'
import Usuario from '../src/models/usuario'
import db from '../src/db/connection'

import UserSequelizeRepository from '../src/components/user/infrastructure/persistence/user_sequelize_repository'
const repo = new UserSequelizeRepository()

test('Probando TS-Jest', async () => {
  db.authenticate()
  const all = await Usuario.findAll()
  expect(all.length).toBe(1)
})

describe('Repository', () => {
  it('Debería tener al menos 1', async () => {
    const all = await repo.list()
    expect(all.length).toBeGreaterThan(0)
  })

  it('Deberia pasar siempre', () => {
    expect(1).toBe(1)
  })
})
