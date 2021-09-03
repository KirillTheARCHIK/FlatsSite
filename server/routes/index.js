const Router=require('express')
const router=new Router()
const complexRouter=require('./complexRouter')
const houseRouter=require('./houseRouter')

router.use('/complex', complexRouter)
router.use('/house', houseRouter)

module.exports=router