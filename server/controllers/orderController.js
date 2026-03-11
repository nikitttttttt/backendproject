import Order from "../models/orderModel.js"

// GET все заказы
export const getAllOrders = async (req, res) => {
  try {

    const orders = await Order.findAll()

    res.status(200).json(orders)

  } catch (error) {

    console.error("Не удалось получить заказы")

  }
}

// POST создать заказ
export const createOrder = async (req, res) => {
  try {

    const { status, date, totalPrice } = req.body

    const newOrder = await Order.create({
      status,
      date,
      totalPrice
    })

    res.status(201).json(newOrder)

  } catch (error) {

    console.error("Не удалось создать заказ")

  }
}