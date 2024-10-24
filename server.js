const app=require('./app');
const connect=require('./config/mongosh')


connect();
app.listen(process.env.PORT,()=>{
    console.log(`server listening to ${process.env.PORT}`);
})
