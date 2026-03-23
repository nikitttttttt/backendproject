import Client from "../models/client.model.js"

// GET все клиенты
export const getAllClients = async (req, res) => {
  try {

    const clients = await Client.findAll()

    res.status(200).json(clients)

  } catch (error) {

    console.error("Не удалось получить данные")
    res.status(500).json({
      success: false,
      message: "Не удалось получить данные"
    })
  }
}

// POST создать клиента
export const createClient = async (req, res) => {
  try {

    const { name, email, rating, bday } = req.body

    const newClient = await Client.create({
      name,
      email,
      rating,
      bday
    })

    res.status(201).json(newClient)

  } catch (error) {

    console.error("Не удалось добавить нового клиента")
    res.status(500).json({
      success: false,
      message: "Не удалось добавить нового клиента"
    })
  }
}


// GET ONE
export const getOneClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const client = await Client.findOne({ where: { id } })

    if (!client) {
      return res.status(404).json({ message: "Клиент не найден" })
    }

    res.json(client)
  } catch (err) {
    next(err)
  }
}

// DELETE
export const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Client.destroy({
      where: { id }
    })

    if (!deleted) {
      return res.status(404).json({ message: "Клиент не найден" })
    }

    res.json({ message: "Клиент удалён" })
  } catch (err) {
    next(err)
  }
}

// UPDATE (PUT)
export const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Client.update(req.body, {
      where: { id }
    })

    if (!updated) {
      return res.status(404).json({ message: "Клиент не найден" })
    }

    const client = await Client.findByPk(id)
    res.json(client)
  } catch (err) {
    next(err)
  }
}

// PATCH
export const updateClientStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body

    const client = await Client.findByPk(id)

    if (!client) {
      return res.status(404).json({ message: "Клиент не найден" })
    }

    client.rating = rating
    await client.save()

    res.json(client)
  } catch (err) {
    next(err)
  }
}