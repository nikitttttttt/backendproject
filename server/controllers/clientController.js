import Client from "../models/client.model.js"

// GET все клиенты
export const getAllClients = async (req, res) => {
  try {

    const clients = await Client.findAll()

    res.status(200).json(clients)

  } catch (error) {

    console.error("Не удалось получить данные")

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

  }
}