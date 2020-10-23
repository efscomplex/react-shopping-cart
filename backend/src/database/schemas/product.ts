import { Schema } from 'mongoose'
import categories from './categories'

export default new Schema({
   name: String,
   branch: String,
   description: String,
   size: {
      type: [String],
      enum: [Number, 'XS', 'S', 'M', 'X', 'L', 'XL', '2XL'],
   },
   color: [String],
   priceBefore: Number,
   priceNow: Number,
   images: [String],
   id: String,
   categories: {
      type: [String],
      enum: categories,
   },
   keywords: [String],
})
