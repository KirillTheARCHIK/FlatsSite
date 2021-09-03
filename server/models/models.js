const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Complex = sequelize.define('complex', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    foundation: {type: DataTypes.DATE},
    image: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    district: {type: DataTypes.STRING}
})

const House = sequelize.define('house', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    complexId: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    foundation: {type: DataTypes.DATE},
    flatsCount: {type: DataTypes.INTEGER},
    image: {type: DataTypes.STRING},
    startPrice: {type: DataTypes.INTEGER},
    address: {type: DataTypes.STRING},
    district: {type: DataTypes.STRING}
})

const HouseInfo = sequelize.define('houseinfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    houseId: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

Complex.hasMany(House)
House.belongsTo(Complex)

House.hasMany(HouseInfo)
HouseInfo.belongsTo(House)

module.exports={
    Complex,
    House,
    HouseInfo
}