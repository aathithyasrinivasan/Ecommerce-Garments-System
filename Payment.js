import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateShip } from "./Address"
import { CardNumberElement,CardExpiryElement,CardCvcElement } from "@stripe/react-stripe-js";
import Steps from './Steps';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { orderComplete } from "../slice/cartSlice";
import { createOrder } from "../actions/orderAction";
import { clearOrderError } from "../slice/orderSlice";
function Payment(){
    
    const stripe=useStripe();
    const element=useElements();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const  orderInfo=JSON.parse(sessionStorage.getItem('orderInfo'))
    const {user}=useSelector(state=>state.userState)
    const {items:cartItems,shippingInfo}=useSelector(state=>state.cartState)
    const {error:orderError}=useSelector(state=>state.orderState)

    const paymentData={
        amount:Math.round(orderInfo && orderInfo.totalPrice*100),
        shipping:{
            name:user.name,
            address:{   
                city:shippingInfo.village,
                postal_code:shippingInfo.pin,
                state:shippingInfo.state,
                line1:shippingInfo.address,
                country:'US'
            },
            phone:shippingInfo.phone
        } 
    }

    const order={
        orderItems:cartItems,
        shippingInfo
    }
    if(orderInfo){
        order.itemsPrice=orderInfo.itemPrice
        order.Shipping=orderInfo.shippingPrice
        order.totalPrice=orderInfo.totalPrice
    }
    useEffect(()=>{
        validateShip(shippingInfo,navigate)
        if(orderError){
            toast.error(orderError,{
                onOpen: ()=>{dispatch(clearOrderError())}
            })
           
        }
    },[])
    const submitHandler = async (e) => {
        e.preventDefault();
        document.querySelector('#pay-button').disabled = true;
        try {
            const { data } = await axios.post('/api/v1/payment/process', paymentData);
            const clientSecret = data.client_secret;
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: element.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,                 
                    }
                }
            });
            if (result.error) {
                toast.error(result.error.message);
                document.querySelector('#pay-button').disabled = false;
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    order.paymentInfo={
                        id:result.paymentIntent.id,
                        status:result.paymentIntent.status
                    }
                    dispatch(createOrder(order))
                    toast.success('Payment Success');
                   
                    // console.log(order)
                    dispatch(orderComplete());
                   
                    navigate('/order/success');
                    
                } else {
                    toast.warning('Please Try Again');
                }
            }
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    };
    
    return(
        <div className="home-panel">
             <Steps shipping confirm payment/>  
            <div className='register-panel bg-light'>
            <form onSubmit={submitHandler}> 
            <label HtmlFor='card-num'>Card Number</label>
            <CardNumberElement
            type='text'
            id='card-num' className="pay-box"/>

            <label HtmlFor='card-expire'>Expire</label>
            <CardExpiryElement
            type='text'
            id='card-expire'
            className="pay-box"/>
             <label HtmlFor='card-cvc'>Card CVC </label>
             <CardCvcElement
             type='text'
             id='card-cvc'
             className="pay-box"/>
              <button variant="primary"  id='pay-button' >Pay -<i className='bi bi-currency-rupee'></i> {orderInfo && orderInfo.totalPrice}</button>
          
          </form>

          </div>
          <ToastContainer/>
        </div>
    )
}

export default Payment;