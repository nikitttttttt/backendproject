import { Router } from "express"

import clientRouter from "./clientRouter.js"
import productRouter from "./productRouter.js"
import orderRouter from "./orderRouter.js"
import cartRouter from "./cartRouter.js"

const router = Router()

router.use('/clients', clientRouter)
router.use('/products', productRouter)
router.use('/orders', orderRouter)
router.use('/carts', cartRouter)

export default router