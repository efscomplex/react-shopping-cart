import { model } from 'mongoose'
import userSchema from '../schemas/users'
import productSchema from '../schemas/product'

const User = model('User', userSchema)
const Product = model('Product', productSchema)

export { User, Product }
