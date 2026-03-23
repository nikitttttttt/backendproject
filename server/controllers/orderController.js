import Order from '../models/orderModel.js'

// GET ALL
export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
}

// GET ONE
export const getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params

    const order = await Order.findOne({ where: { id } })

    if (!order) {
      return res.status(404).json({ message: 'Заказ не найден' })
    }

    res.json(order)
  } catch (err) {
    next(err)
  }
}

// CREATE
export const createOrder = async (req, res, next) => {
  try {
    const { status, date, totalPrice } = req.body

    const newOrder = await Order.create({ status, date, totalPrice })

    res.status(201).json(newOrder)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Order.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ message: 'Заказ не найден' })
    }

    res.json({ message: 'Заказ удален' })
  } catch (err) {
    next(err)
  }
}