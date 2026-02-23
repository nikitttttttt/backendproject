import express from 'express'
import "dotenv/config"
import sequelize from './db.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const url = process.env.SERVER_URL
const port = process.env.PORT

// Пример маршрута
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log('Подключение к БД успешно')

        app.listen(port, () => {
            console.log(`${url}${port}`)
        })

    } catch (error) {
        console.error("Не удалось подключиться к БД", error)
    }
}

start()