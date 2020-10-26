import { Router } from 'express'
import * as product from '../controllers/product'

const router = Router()

router.get('', product.get)
router.post('', product.post)

export default router
