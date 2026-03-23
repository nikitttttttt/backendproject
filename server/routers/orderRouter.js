import { Router } from "express"
import {
  getAllOrders,
  getOneOrder,
  createOrder,
  deleteOrder
} from "../controllers/orderController.js"

const router = Router()

router.get('/', getAllOrders)
router.get('/:id', getOneOrder)
router.post('/', createOrder)
router.delete('/:id', deleteOrder)

export default router