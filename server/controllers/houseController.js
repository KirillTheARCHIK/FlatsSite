const {House}=require('../models/models')
const ApiError=require('../error/ApiError')
const uuid=require('uuid')
const path=require('path')
class HouseController{
    async create(req, res, next) {
        try{
            const {complexId, name, foundation, flatsCount, startPrice, address, district}=req.body
            const {image} = req.files
            let fileName=uuid.v4()+".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const house=await House.create({complexId, name, foundation, flatsCount, startPrice, image: fileName, address, district})
            return res.json(house)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const {complexId}=req.body
        let houses
        if(!complexId)
        {
            houses=await House.findAll()
        }
        if(complexId)
        {
            houses=await House.findAll({where: {complexId}})
        }
        return res.json(houses)
    }
    async getOne(req, res) {
        const {houseId}=req.body
        let house
        house=await House.findOne({where: {houseId}})
        return res.json(house)
    }
}

module.exports=new HouseController()