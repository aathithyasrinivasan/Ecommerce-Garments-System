const mongoose=require('mongoose');

const connect=()=>{
    mongoose.connect(process.env.DB_CONNECTION,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log("mongodb is connected");
    })
}
module.exports=connect;