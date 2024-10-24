import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../slice/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import Metadata from './Metadata'
import { ToastContainer } from 'react-toastify';
import { Fragment, useEffect, useState } from 'react';

function Cart(){
    const {loading,product}=useSelector((state)=>state.productState);
    const {items}=useSelector(state=>state.cartState)
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const [Quantity,setQuantity]=useState(1)
    const increaseQty=()=>{
        const count=document.querySelector('.qty')
        if(product.stock===0||count.valueAsNumber>=product.stock)return;
        const qty=count.valueAsNumber+1;
        setQuantity(qty)
    }
    const deccreaseQty=()=>{
        const count=document.querySelector('.qty')
        if(count.valueAsNumber===1)return;
        const qty=count.valueAsNumber-1;
        setQuantity(qty)
    }
    const checkhandler=()=>{
           navigate('/login?redirect=shipping')
    }
    return(
        <div className="home-panel bg-light">
           <Metadata title={'Your Cart'}/>
            {items.length===0?<p>Your Carrt is Empty</p>:
            <div className='d-flex'>        
                    <ul className='order-panel-detail'>
                    {items.map(item=>(
                        <li>
                            <div className="order-detail-panel">
                                <div className='order-image-panel'>
                                    <img src={item.image} alt='saree' className='image-order-panel'/>    
                                </div>   
                                <div className='order-price-panel d-flex'>
                                    <div>
                                    <p className='text-success fw-bold'>{item.name}</p>
                                    <h3 className='text-secondary fw-bold pb-1'><span>Rs.<i className='bi bi-currency-rupee'></i></span>{item.price}</h3>
                                    <h3 ><span className='bg-success rounded-4 text-light px-1'>4.5<i className='bi bi-star fs-6 pb-1'></i> </span>Rating</h3>
                                    <div className='d-flex q-block '>
                                    <button className='in-btn mx-2'onClick={deccreaseQty} ><i className='bi bi-dash-circle'></i></button><input type="number" className="t-qty mx-2 qty px-2" value={Quantity}/><button className='dn-btn mx-2' onClick={increaseQty}><i className='bi bi-plus-circle'></i></button>
                                    </div>
                                    </div>              
                                    <div className='margin-remove'>
                                        <i className='bi bi-archive-fill text-danger pb-2 fs-2' onClick={()=>dispatch(removeCart(item.product))}></i>    
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
            <ToastContainer/>
            <div className='cart-price-panel'>
                    <h2 className='result'>Order Price</h2>
                        <ul className='filters-inner-panel'>
                          <li>
                            <h5>Sub Total  :{items.reduce((acc,item)=>(acc+item.quantity),0)}</h5>
                          </li>
                          <li>
                            <h5>Total Product Price  :{items.reduce((acc,item)=>(acc+item.quantity *item.price),0)}</h5>
                          </li>
                          <li>         
                                <button onClick={checkhandler}>Place Order</button>       
                          </li>
                        </ul>
                </div>
            </div>
            }
        </div>
    );
}
export default Cart;