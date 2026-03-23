import { Router } from "express"
import {
  getAllCarts,
  createCart,
  deleteCart
} from "../controllers/cartController.js"

const router = Router()

router.get('/', getAllCarts)
router.post('/', createCart)
router.delete('/:id', deleteCart)

export default router