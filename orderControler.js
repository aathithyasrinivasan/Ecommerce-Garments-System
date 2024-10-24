const Order=require('../models/OrderModel')
const Product=require('../models/ProductModel')
exports.createOrder=async(req,res,next)=>{
const {
    orderItems,
    shippingInfo,
    itemsPrice,
    Shipping,
    totalPrice,
    paymentInfo,
    }=req.body
const order=await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    Shipping,
    totalPrice,
    paymentInfo,
    paidAt:Date.now(),
    user:req.user.id
    })
    res.status(200).json({
        success:true,
        order
    })
}
exports.getOrder= async(req,res,next)=>{
    const order=await Order.findById(req.params.id).populate('user','name email')
    if(!order){
        res.status(401).json({
            success:false,
            message:"order not found"
        })
    }
    res.status(200).json({
        success:true,
        order
    })
}
exports.myOrders= async(req,res,next)=>{
    const order=await Order.find({user:req.user.id});    
    res.status(200).json({
        success:true,
        order
    })
}
exports.orders= async(req,res,next)=>{
    const orders=await Order.find();    
    let totalAmount=0;
    orders.forEach(order=>{
       totalAmount += order.totalPrice
    })
    res.status(200).json({
        success:true,
        totalAmount,
        order
    })
}
exports.updateOrder=async(req,res,next)=>{
    const order=await Order.findById(req.params.id)
    if(order.orderStatus=='Delivered'){
             res.status(201).json({
                success:false,
                message:'product already delivered'
             }) 
    }
    order.orderItems.forEach(async orderItem=>{
       await updateStock(orderItem.product,orderItem.quantity)
    })
    order.orderStatus=req.body.orderStatus
    order.DeliveryAt=Date.now();
    await order.save()
    res.status(200).json({
        success:true,

    })

}

async function updateStock(productId,quantity){
    const product=await Product.findById(productId)
    product.stock=product.stock-quantity
    product.save({validateBeforeSave:false});
}