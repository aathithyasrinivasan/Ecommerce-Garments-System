// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const buySlice =createSlice({
    name:"buy",
    initialState:{
        items:localStorage.getItem('buyItems') ? JSON.parse(localStorage.getItem('buyItems')):[],
        loading:false,
        buy:false,
        shippingInfo:sessionStorage.getItem('shippingInfo') ? JSON.parse(sessionStorage.getItem('shippingInfo')):{},
   
    },
    reducers:{
        buyRequest(state,action){
            return{
                ...state,
                loading:true,
                buy:false
            }
        },
        buySuccess(state,action){
            const items=action.payload
                state={
                    items,
                    loading:false,
                    buy:true
                }
                localStorage.setItem('buyItems',JSON.stringify(state.items))
              
            return state
        },
        buyComplete(state,action){
            sessionStorage.removeItem('shippingInfo');
            localStorage.removeItem('buyItems')
            sessionStorage.removeItem('orderInfo')
            return{
                item:{},
                loading:false,
                buy:false,
                shippingInfo:{},
            } 
        },
        saveShipping(state,action){
            sessionStorage.setItem('shippingInfo',JSON.stringify(action.payload))
            return{
                ...state,
                shippingInfo:action.payload
            } 
        }
    }
})
const {actions,reducer}=buySlice;

export const {buyRequest,buySuccess,buyComplete,saveShipping}=actions;
export default reducer;