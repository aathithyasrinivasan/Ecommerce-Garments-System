const express=require('express');
const { getProducts, createProduct, getSingleProduct, updateProduct, deleteProduct, getAdminProduct } = require('../Controllers/productControler');
const router=express.Router();
const {isAuthenticateUser,autherizeRoles}=require('../middleware/authenticate')
const multer=require('multer')
const path=require('path')
const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'..','Uploads/Products'))
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})})



router.route('/products').get(getProducts);
router.get('/products',getProducts);
router.route('/product/create').post(createProduct);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id').put(isAuthenticateUser,autherizeRoles('admin'),upload.array('images'),updateProduct);
router.route('/admin/product/:id').delete(isAuthenticateUser,autherizeRoles('admin'),deleteProduct);
router.route('/admin/products').get(isAuthenticateUser,autherizeRoles('admin'), getAdminProduct)
router.route('/admin/product/new').post(isAuthenticateUser,autherizeRoles('admin'),upload.array('images'),createProduct)
module.exports=router


