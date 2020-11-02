import { User } from '../database/models'

const get = async (req, res) => {
   const { id } = req.params
   const user = await User.findById(id)
   res.send(user)
}
const post = async (req, res) => {
   const user = req.body
   const newUser = new User(user)
   await newUser.save()
}

export { get, post }
