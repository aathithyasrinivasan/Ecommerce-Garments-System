const express=require('express');
const app=express();
const products=require('./routes/product')
const user=require('./routes/user')
const order=require('./routes/order')
const path=require('path');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser')
app.use('/Uploads',express.static(path.join(__dirname,'Uploads')))
dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
const payment=require('./routes/payment')
app.use(cookieParser());
app.use('/api/v1/',payment)
app.use('/api/v1/',products);
app.use('/api/v1/',user);
app.use('/api/v1/',order);

module.exports=app;
