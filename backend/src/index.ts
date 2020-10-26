import express from 'express'
import { Router } from 'express'
import dbStart from './database'
import userRouter from './routes/user'
import productsRouter from './routes/product'

const app = express()
const user = Router()

user.get('', (req, res) => {
   res.status(200).json({ msg: 'hello world!!' })
})

app.use(express.json())

app.use('/user', userRouter)
app.use('/products', productsRouter)

const PORT = process.env.PORT || 4000
console.log(process.env.npm_package_name)
app.listen(PORT, () => {
   console.log(`server listen on port ${PORT}`)
})

dbStart()
