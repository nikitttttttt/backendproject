import { Router } from "express"
import { getAllCarts, createCart } from "../controllers/cartController.js"

const router = Router()

router.get('', getAllCarts)
router.post('', createCart)

export default router