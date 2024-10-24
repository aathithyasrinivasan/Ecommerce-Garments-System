const mongoose=require('mongoose');
const validator=require('validator')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[20,"name does't exceed 20 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter valid email"]
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        minLength:[6,"password must contain 6 characters"],
        select:false
    },
    role:{
        type:String,
        default:'user'
    },
    resetpass:{
        type:String
    },
    resetpassex:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
userSchema.pre('save',async function (next){
    this.password=await bcrypt.hash(this.password,10)
})
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_TIME})
}
userSchema.methods.isValidPassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}
userSchema.methods.resetPassword=function(){
    
}
let user_model=mongoose.model('User',userSchema);
module.exports=user_model;