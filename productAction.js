import axios from 'axios'
import { productSuccess,productFail,productRequest, newproductRequest, newproductSuccess, newproductFail, deleteproductRequest,deleteproductSuccess, deleteproductFail, updateproductRequest, updateproductSuccess, updateproductFail } from '../slice/productSlice'

export const getProduct= id => async (dispatch)=>{
    try{   
        dispatch( productRequest())
        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data))
    }
    catch(error){
       dispatch(productFail(error.response.data.message))
    }
}
export const createNewProduct= (productData) => async (dispatch)=>{
    try{   
        dispatch( newproductRequest())
        const {data} = await axios.post(`/api/v1/admin/product/new`,productData);
        dispatch(newproductSuccess(data))
    }
    catch(error){
       dispatch(newproductFail(error.response.data.message))
    }
}

export const deleteProduct= (id) => async (dispatch)=>{
    try{   
        dispatch( deleteproductRequest())
        const {data} = await axios.delete(`/api/v1/admin/product/${id}`);
        dispatch(deleteproductSuccess(data))
    }
    catch(error){
       dispatch(deleteproductFail(error.response.data.message))
    }
}


export const UpdateProduct= (id,productData) => async (dispatch)=>{
    try{   
        dispatch( updateproductRequest())
        const {data} = await axios.put(`/api/v1/admin/product/${id}`,productData);
        dispatch(updateproductSuccess(data))
    }
    catch(error){
       dispatch(updateproductFail(error.response.data.message))
    }
}