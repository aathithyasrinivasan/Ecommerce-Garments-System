// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const orderSlice =createSlice({
    name:"order",
    initialState:{
       orderDetail:{},
       userOrders:[],
       loading:false,
    },
    reducers:{
        createOrderRequest(state,action){
            return{
                ...state,
              loading:true,

                
            }
        },
        createOrderSuccess(state,action){
             return{
                ...state,
                loading:false,
                orderDetail:action.payload.order
             }
        },
       createOrderFail(state,action){
        return{
            ...state,
            loadind:false,
            error:action.payload
        }
       },

       clearOrderError(state,action){
        return{
            ...state,
            error:null
        }
       },
       userOrdersRequest(state,action){
        return{
            ...state,
          loading:true,

            
        }
    },
    userOrdersSuccess(state,action){
         return{
            ...state,
            loading:false,
            userOrders:action.payload.order
         }
    },

   userOrdersFail(state,action){
    return{
        ...state,
        loadind:false,
        error:action.payload
    }
   }
    }
})
const {actions,reducer}=orderSlice;

export const {createOrderFail,createOrderRequest,createOrderSuccess,clearOrderError,
userOrdersFail,userOrdersRequest,userOrdersSuccess}=actions;
export default reducer;