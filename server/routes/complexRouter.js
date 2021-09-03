const Router=require('express')
const router=new Router()
const complexController = require('../controllers/complexController')

router.post('/', complexController.create)
router.get('/', complexController.getAll)
router.get('/:id', complexController.getOne)

module.exports=router