import { Product } from '../database/models'

const get = async (req, res) => {
   const products = await Product.find()
   res.status(200).send(products)
}
const post = async (req, res) => {
   const product = req.body
   const newProduct = new Product(product)
   await newProduct.save()
   res.status(200).send(product)
}

export { get, post }
