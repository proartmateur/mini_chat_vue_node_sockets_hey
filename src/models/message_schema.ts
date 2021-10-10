import { Schema, model } from 'mongoose'
const MessageSchema = new Schema({
  id: {
    type: String,
    required: [true, 'The id field is required'],
    unique: true
  },
  user_name: {
    type: String,
    required: [true, 'The user_name field is required'],
  },
  content: {
    type: String,
    required: [true, 'The content field is required'],
  },
  time: {
    type: String
  },
  date: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

export default model('Message', MessageSchema)
