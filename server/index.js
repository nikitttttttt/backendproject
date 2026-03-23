import express from 'express'
import "dotenv/config"
import sequelize from './db.js'
import cors from 'cors'

import Client from './models/client.model.js'
import Order from './models/orderModel.js'
import Cart from './models/cartModel.js'
import Product from './models/productModel.js'

import router from './routers/router.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)
const url = process.env.SERVER_URL
const port = process.env.PORT

// связи между таблицами
Client.hasMany(Order)
Order.belongsTo(Client)

Product.belongsToMany(Order, { through: Cart })
Order.belongsToMany(Product, { through: Cart })

// тестовый маршрут
app.get('/', async (req, res) => {
  res.send('Hello World')
})



const start = async () => {
  try {

    await sequelize.authenticate()
    console.log('Подключение к БД успешно')

    // создаёт таблицы и добавляет связи
    await sequelize.sync()

    app.listen(port, () => {
      console.log(`${url}${port}`)
    })

  } catch (error) {
    console.error("Не удалось подключиться к БД", error)
  }
}

start()



