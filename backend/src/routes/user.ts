import { Router } from 'express'
import * as user from '../controllers/user'

const router = Router()

router.get('/', user.get)
router.post('/', user.post)

export default router
