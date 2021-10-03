import { Sequelize, Dialect } from 'sequelize'

const getDialect = (db_driver_name: string): Dialect => {
  db_driver_name = db_driver_name.toLowerCase()
  switch (db_driver) {
    case 'mariadb':
      return 'mariadb'
      break
    case 'mysql':
      return 'mysql'
      break
    case 'mssql':
    case 'sql_server':
    case 'azure_sql':
      return 'mssql'
      break
    case 'psql':
    case 'postgres':
    case 'postgresql':
    case 'postgre_sql':
      return 'postgres'
      break
    case 'sqlite':
    case 'lite':
    case 'sq_lite':
      return 'sqlite'
      break
    default:
      return 'mariadb'
  }
}

const db_driver = process.env.DB_DRIVER || 'mariadb'
const db_port = process.env.DB_PORT || '3306'
const db_host = process.env.DB_HOST || '127.0.0.1'
const db_user = process.env.DB_USER || 'root'
const db_pass = process.env.DB_PASS || ''
const db_name = process.env.DB_NAME || 'node_db'

const db = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: getDialect(db_driver),
  logging: false,
})

export default db
