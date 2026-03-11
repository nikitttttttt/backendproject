import Product from "../models/productModel.js"

// GET все продукты
export const getAllProducts = async (req, res) => {
  try {

    const products = await Product.findAll()

    res.status(200).json(products)

  } catch (error) {

    console.error("Не удалось получить продукты")

  }
}

// POST создать продукт
export const createProduct = async (req, res) => {
  try {

    const { name, description, price } = req.body

    const newProduct = await Product.create({
      name,
      description,
      price
    })

    res.status(201).json(newProduct)

  } catch (error) {

    console.error("Не удалось добавить продукт")

  }
}