const validator=require('validator')
const User =require('../models/userModel')
exports.registerUser=async(req,res,next)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        return(
            res.status(400).json({
                success:false,
                message:'please enter email and password'
            })
        )
    }
    if(!validator.isEmail(email))
    {
        return(
            res.status(400).json({
                success:false,
                message:'Please Enter Valid Email'
            })
        )
    }
   
    if(!validator.isLength(password,{min:6,max:20}))
    {
        return(
            res.status(400).json({
                success:false,
                message:'Password Must contain six Characters'
            })
        )
    }
    const existance=await User.findOne({email})
    if(existance){
        return(
            res.status(400).json({
                success:false,
                message:'Email was Already Exists'
            })
        )
    }
    
    const user=await User.create({
        name,
        email,
        password
    });
   
    const token=user.getJwtToken();
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
        httpOnly:true,
    }
    res.status(201).cookie("token",token,options).json({
        success:true,
        message:"Register Success",
        user,
        token
    })
}
exports.loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password){
        return(
            res.status(400).json({
                success:false,
                error:'please enter email and password'
            })
        )
    }
    const user=await User.findOne({email}).select('+password');
    if(!user){
        return(
            res.status(400).json({
                success:false,
                error:"Invalid email or password"
            })
        )
    }
    if(!await user.isValidPassword(password)){
        return(
            res.status(401).json({
                success:false,
                error:"Invalid email or password"
            })
        )
    }
    const token=user.getJwtToken();
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
        httpOnly:true,
    }
    res.status(201).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}
exports.logoutUser=(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(201).json({
        success:true,
        message:"user logout"
    })
}
exports.getUser=async(req,res,next)=>{
 const user= await User.findById(req.user.id)
 res.status(200).json({
    success:true,
    user
 })
}
exports.getAllUser=async(req,res,next)=>{
  const user=await User.find()
  res.status(200).json({
    success:true,
    user
  })
}
exports.getSpecificUser=async(req,res,next)=>{
    const user=User.findById(req.params.id)
    if(!user){
        res.status(400).json({
            success:false,
            messag:"not found"
          })
    }
    res.status(200).json({
        success:true,
        user
    })

}
exports.updateUser=async(req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }
    const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
    })
    res.status(200).json({
        success:true,
        user
    })
}
