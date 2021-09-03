const {Complex}=require('../models/models')
const ApiError=require('../error/ApiError')
const uuid=require('uuid')
const path=require('path')

class ComplexController{
    async create(req, res, next) {
        try{
            const {name, city, foundation, address, district}=req.body
            const {image} = req.files
            let fileName=uuid.v4()+".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const complex=await Complex.create({name, city, foundation, image: fileName, address, district})
            return res.json(complex)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const complexes=await Complex.findAll()
        return res.json(complexes)
    }
    async getOne(req, res) {
        
    }
}

module.exports=new ComplexController()