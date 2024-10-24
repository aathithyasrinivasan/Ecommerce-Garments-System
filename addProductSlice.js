// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const addProductSlice =createSlice({
    name:"addProduct",
    initialState:{
        loading:false,
        error:false
    },
    reducers:{
        addProductRequest(state,action){
            return{
                loading:true,
            }
        },
        addProductSuccess(state,action){
            return{
                loading:false,
            }
        },
        addProductFail(state,action){
            return{
                loading:false,
                isAuthenticateUser:false,
                error:action.payload
            }
        }

    }
})
const {actions,reducer}=addProductSlice;

export const {addProductRequest,addProductSuccess,addProductFail}=actions;
export default reducer;