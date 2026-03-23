
import { Router } from "express"
import {
  getAllClients,
  getOneClient,
  createClient,
  deleteClient,
  updateClient,
  updateClientStatus
} from "../controllers/clientController.js"

const router = Router()

router.get('/', getAllClients)
router.get('/:id', getOneClient)
router.post('/', createClient)
router.delete('/:id', deleteClient)
router.put('/:id', updateClient)
router.patch('/:id', updateClientStatus)

export default router