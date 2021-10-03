import { Model } from 'sequelize/types'
import Usuario from '../../../../models/usuario'
import IUserRepository from '../../domain/iuser_repository'

export default class UserSequelizeRepository implements IUserRepository {
  list(): Promise<Model<any, any>[]> {
    return Usuario.findAll()
  }
  find(id: number): Promise<Model<any, any> | null> {
    return Usuario.findByPk(id)
  }
}
