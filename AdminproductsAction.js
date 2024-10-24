import axios from 'axios'
import { AdminproductsSuccess,AdminproductsFail,AdminproductsRequest } from '../slice/AdminProductSlice'

export const getProducts= ()=>async (dispatch)=>{
    try{   
        dispatch( AdminproductsRequest())
        let link=`/api/v1/admin/products`;
        const {data} = await axios.get(link);
        dispatch(AdminproductsSuccess(data))
    }
    catch(error){
        dispatch(AdminproductsFail(error.response.data.message))
    }
}