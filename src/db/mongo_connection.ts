import mongoose from 'mongoose'

const db_connection_string = process.env.MONGO_CONNECTION
const dbConnection = async () => {
  try {

    // @ts-ignore
    await mongoose.connect(db_connection_string)
    console.log("DB: OK      Driver: mongodb")
  } catch (error) {
    console.log(error)
    throw new Error('Error: problem to start mongo database')
  }
}

export default dbConnection
