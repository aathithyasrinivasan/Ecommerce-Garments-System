// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const AdminproductsSlice =createSlice({
    name:"adminproducts",
    initialState:{
        loading:false
    },
    reducers:{
        AdminproductsRequest(state,action){
            return{
                loading:true
            }
        },
        AdminproductsSuccess(state,action){
            return{
                loading:false,
                products:action.payload.products
            }
        },
        AdminproductsFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }

    }
})
const {actions,reducer}=AdminproductsSlice;

export const {AdminproductsRequest,AdminproductsSuccess,AdminproductsFail}=actions;
export default reducer;