require('dotenv').config()
const express = require('express')
const sequelize=require('./db')
const models=require('./models/models')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const path=require('path')
const router=require('./routes/index')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')

const port = process.env.PORT
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async()=>{
	try {
		await sequelize.authenticate()
		await sequelize.sync({force: false})
		app.listen(port, function() {console.log(`Server started at ${port}`)})
	} catch(e){
		console.log(e)
	}
}

start()