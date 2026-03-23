import Product from "../models/productModel.js"

// GET все продукты
export const getAllProducts = async (req, res) => {
  try {

    const products = await Product.findAll()

    res.status(200).json(products)

  } catch (error) {

    console.error("Не удалось получить продукты")
    res.status(500).json({
      success: false,
      message: "Не удалось получить продукт"
    })
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
    res.status(500).json({
      success: false,
      message: "Не удалось добавить новый продукт"
    })
  }
}


// GET ONE
export const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const product = await Product.findOne({ where: { id } })

    if (!product) {
      return res.status(404).json({ message: 'Продукт не найден' })
    }

    res.json(product)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Product.destroy({ where: { id } })

    if (!deleted) {
      return res.status(404).json({ message: 'Продукт не найден' })
    }

    res.json({ message: 'Продукт удален' })
  } catch (err) {
    next(err)
  }
}

// UPDATE
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Product.update(req.body, { where: { id } })

    if (!updated) {
      return res.status(404).json({ message: 'Продукт не найден' })
    }

    const product = await Product.findByPk(id)
    res.json(product)
  } catch (err) {
    next(err)
  }
}