const Product=require('../models/ProductModel');
const APIFeatures =require('../Utils/apiFeatures');

exports.getProducts=async(req,res,next)=>{
   const apiFeatures= new APIFeatures(Product.find(),req.query).search().filter()
   const products= await apiFeatures.query;
//    await new Promise(resolve=>setTimeout(resolve,4000))
    res.status(200).json({
        success:true,        
        count:products.length,
        products
    })
}
exports.getSingleProduct=async(req,res,next)=>{   
    const product= await Product.findById(req.params.id);
   // await new Promise(resolve=>setTimeout(resolve,4000))
    if(!product){
      return  res.status(404).json({
            success:false,
            message:"product not found"
        });
    }
    res.status(201).json(
        {
            success:true,
            product:product
        }
    )
}
exports.createProduct=(req,res,next)=>{
   
   
    let imagess=[]
    if(req.files.length > 0){
        req.files.forEach(file => {
            let url=`${process.env.BACKEND_URL}/Uploads/products/${file.originalname}`
            imagess.push({image:url})
        });
    }
    req.body.images=imagess
    req.body.user=req.user.id
    const {name,images,price,offer,description,Madefor,Fabric,category,stock}=req.body
    if(!name || !images || !price || !offer ||!description ||!Madefor ||!Fabric ||!category ||!stock){
        return(
            res.status(400).json({
                success:false,
                message:'Please Enter All Information'
            })
        )
    }
    const product=Product.create(req.body);
    res.status(201).json(
        {
            success:true,
            product
        }
    )  
}
exports.updateProduct=async(req,res,next)=>{
    
  
    let product= await Product.findById(req.params.id);
      
    let imagess=[]

    if(req.body.imagesCleared==='false'){
        images=product.images
    }
    if(req.files.length > 0){
        req.files.forEach(file => {
            let url=`${process.env.BACKEND_URL}/Uploads/products/${file.originalname}`
            imagess.push({image:url})
        });
    }
    req.body.images=imagess
    if(!product){
        res.status(404).json({
            success:false,
            message:"product not found"
        });
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
         new:true,
         runValidators:true
    })
    res.status(200).json(
        {
            success:true,
            product
        }
    )
}
     exports.deleteProduct=async(req,res,next)=>{
            let product=await Product.findByIdAndDelete(req.params.id);
            res.status(200).json(
                {
                    success:true,
                    message:"product removed"
                })
     }
  exports.updateReview=async(req,res,next)=>{
    
  }
    exports.getAdminProduct=async(req,res,next)=>{
        const products=await Product.find()
        res.status(200).send({
            success:true,
            products
        })
    }