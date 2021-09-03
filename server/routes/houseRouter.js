const Router=require('express')
const router=new Router()
const houseRouter=require('../controllers/houseController')

router.post('/', houseRouter.create)
router.get('/', houseRouter.getAll)
router.get('/:id', houseRouter.getOne)

module.exports=router