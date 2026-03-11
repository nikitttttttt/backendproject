import Cart from "../models/cartModel.js"

// GET все корзины
export const getAllCarts = async (req, res) => {
  try {

    const carts = await Cart.findAll()

    res.status(200).json(carts)

  } catch (error) {

    console.error("Не удалось получить корзины")

  }
}

// POST добавить товар в корзину
export const createCart = async (req, res) => {
  try {

    const { quantity } = req.body

    const newCart = await Cart.create({
      quantity
    })

    res.status(201).json(newCart)

  } catch (error) {

    console.error("Не удалось создать корзину")

  }
}