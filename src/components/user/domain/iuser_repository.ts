import { Model } from 'sequelize'

export default interface IUserRepository {
  list(): Promise<Model<any, any>[]>
  find(id: number): Promise<Model<any, any> | null>
}
