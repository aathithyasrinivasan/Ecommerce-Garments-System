const express=require('express');
const { createOrder, getOrder, myOrders, orders, updateOrder } = require('../Controllers/orderControler');
const {isAuthenticateUser,autherizeRoles}=require('../middleware/authenticate')


const router=express.Router();

router.route('/order/new').post(isAuthenticateUser ,createOrder)
router.route('/order/:id').get(isAuthenticateUser ,getOrder)
router.route('/myorders').get(isAuthenticateUser ,myOrders)

router.route('/orders').get(isAuthenticateUser,autherizeRoles('admin'),orders)
router.route('/orders/:id').put(isAuthenticateUser,autherizeRoles('admin'),updateOrder)

module.exports=router