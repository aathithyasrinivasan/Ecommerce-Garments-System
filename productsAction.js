import axios from 'axios'
import { productsSuccess,productsFail,productsRequest } from '../slice/productsSlice'

export const getProducts= (keyword,category,fabric,made,price)=>async (dispatch)=>{
    try{   
        dispatch( productsRequest())
        let link=`/api/v1/products?`;
        if(keyword){
            link +=`&keyword=${keyword}`
            console.log(link);
        }
        if(category){
            link +=`&category=${category}`
            console.log(link);
        }
        if(fabric){
            link +=`&Fabric=${fabric}`
            console.log(link);
        }
        if(made){
            link +=`&Madefor=${made}`
            console.log(link);
        }
        if(price){
            link +=`&price[$lte]=${price}`
            console.log(link);
                 }
        
        const {data} = await axios.get(link);
        dispatch(productsSuccess(data))
    }
    catch(error){
       dispatch(productsFail(error.response.data.message))
    }
}