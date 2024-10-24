// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[],
        loading:false,
        shippingInfo:sessionStorage.getItem('shippingInfo') ? JSON.parse(sessionStorage.getItem('shippingInfo')):{},
   
    },
    reducers:{
        cartRequest(state,action){
            return{
                ...state,
                loading:true,
                inCart:false
                
            }
        },
        cartSuccess(state,action){
            const item=action.payload
            const isItemExist=state.items.find(i=>i.product===item.product)
            if(isItemExist){

                state={
                    ...state,
                    loading:false,
                   
                }
                toast.error("Already in Cart")
            }
            else{
                state={
                    items:[...state.items,item],
                    loading:false,
                    inCart:false
                }
                localStorage.setItem('cartItems',JSON.stringify(state.items))
                toast.success("Added in Cart")
            }
            return state
        },

          cartRequest(state,action){
            return{
                ...state,
                loading:true,
                inCart:false
                
            }
        },
        cartSuccess(state,action){
            const item=action.payload
            const isItemExist=state.items.find(i=>i.product===item.product)
            if(isItemExist){

                state={
                    ...state,
                    loading:false,
                   
                }
                toast.error("Already in Cart")
            }
            else{
                state={
                    items:[...state.items,item],
                    loading:false,
                    inCart:false
                }
                localStorage.setItem('cartItems',JSON.stringify(state.items))
                toast.success("Added in Cart")
            }
            return state
        },
        increaseCartQty(state,action){
            state.items=state.items.map(item=>{
                if(item.product===action.payload){
                     item.quantity=item.quantity+1
                }
                return item
        })
        localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        decreaseCartQty(state,action){
            state.items=state.items.map(item=>{
                if(item.product===action.payload){
                     item.quantity=item.quantity-1
                }
                return item
        })
        localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        removeCart(state,action){
            const filteritem=state.items.filter(item=>
                {
                    return item.product!==action.payload
                })
               
                localStorage.setItem('cartItems',JSON.stringify(filteritem))
               
                    toast.success("Removed from Cart")
                
                return{
                    ...state,
                    items:filteritem,
                    
                }
             

        },
        orderComplete(state,action){
            sessionStorage.removeItem('shippingInfo');
            localStorage.removeItem('cartItems')
            sessionStorage.removeItem('orderInfo')
            return{
               
                items:[],
                loading:false,
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
const {actions,reducer}=cartSlice;

export const {cartRequest,cartSuccess,increaseCartQty,decreaseCartQty,removeCart,orderComplete,saveShipping}=actions;
export default reducer;