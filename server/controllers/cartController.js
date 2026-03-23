import Cart from '../models/cartModel.js'

// GET ALL
export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.json(carts)
  } catch (err) {
    next(err)
  }
}

// CREATE
export const createCart = async (req, res, next) => {
  try {
    const { quantity } = req.body

    const newCart = await Cart.create({ quantity })

    res.status(201).json(newCart)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Cart.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ message: 'Корзина не найдена' })
    }

    res.json({ message: 'Удалено' })
  } catch (err) {
    next(err)
  }
}