const express=require('express');
const { isAuthenticateUser } = require('../middleware/authenticate');

const { processPayment, sendStripe } = require('../Controllers/paymentController');
const router=express.Router();

router.route('/payment/process').post(isAuthenticateUser,processPayment)
router.route('/stripe').get(isAuthenticateUser,sendStripe)

module.exports=router