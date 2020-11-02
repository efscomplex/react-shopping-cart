import { Schema } from 'mongoose'

export default new Schema({
   name: String,
   email: String,
   age: {
      type: Number,
      required: false,
   },
})
