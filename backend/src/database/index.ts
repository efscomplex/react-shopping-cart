export * from './models'
import dotenv from 'dotenv'
import db from 'mongoose'

dotenv.config()

const { USERNAME, DB_NAME, PASSWORD } = process.env
const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.opaxc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export default () => {
   db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
   db.connection.on('connected', () => console.log('database is connected...'))
}
