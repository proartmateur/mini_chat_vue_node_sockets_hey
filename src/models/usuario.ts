import db from '../db/connection'
import { DataTypes } from 'sequelize'

const Usuario = db.define(
  'Usuario',
  {
    nombre: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    activo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'usuarios',
  }
)

export default Usuario
