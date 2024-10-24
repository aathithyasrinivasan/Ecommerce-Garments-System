const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the Product name"],
        trim:true,
        maxLength:[200,"Name does't exceed 200 characters"]
    },
    price:{
        type:Number,
        required:[true,"Please enter price"],
    },
    description:{
        type:String,
        required:[true,"please enter the description of the product"],
        maxLength:[1000,"description can't exceed to 1000 characters"],
        trim:true
    },
    Madefor:{
        type:String,
        required:[true,"Please select a Made For "],
        enum:{
            values:[
                'Female',
                'Male',
            ]
        }
    },
    Fabric:{
        type:String,
        required:[true,"Please select a Fabric"],
        enum:{
            values:[
                'Cotton',
                'Silk',
                'Polyester',
                'Lycra',
                'Jeans',
                'Chiffon',
                'Semisilk',
               
            ]
        }
    },
    ratings:{
        type:Number,
        default:0.0
    },
    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please select a category"],
        enum:{
            values:[
                'Shirt',
                'Phant',
                'Tshirt',
                'Saree',
                'Silk saree',
            ]
        }
    },
    stock:{
        type:Number,
        required:[true,"Please enter the stock"],
        maxLength:[20,"stock does't exceed 20 characters"]
    },
    seller:{
        type:String,
       
    },
    numofreview:{
        type:Number,
         defautt:0.0
    },
    offer:{
        type:Number,
        required:true
    },
    Reviews:[
        {
            name:{
                type:String,
               
            },
            Rating:{
                type:String,
               
            },
            Comment:{
                type:String,
               
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now       
    }
})
let product_model=mongoose.model('Product',productSchema);
module.exports=product_model;