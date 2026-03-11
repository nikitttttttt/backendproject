import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING
  },

  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0
  }
})

export default Product