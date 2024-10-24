import { useEffect } from "react"
import Table from 'react-bootstrap/Table';
import { validateShip } from "./Address"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import Steps from './Steps';
function Confirm(){
    const navigate=useNavigate()
    const {shippingInfo,items}=useSelector(state=>state.cartState)
    const {user}=useSelector(state=>state.userState)
    const itemCount=items.reduce((acc,item)=>(acc+item.quantity),0)
    const itemPrice=items.reduce((acc,item)=>(acc+item.quantity *item.price),0)
    const shippingPrice=itemPrice<=200?50:0
    const totalPrice=itemPrice+shippingPrice
    const proceedPyment=()=>{
        const data={
            itemPrice,
            shippingPrice,
            totalPrice
        }
        sessionStorage.setItem('orderInfo',JSON.stringify(data))
        navigate('/payment')
    }
    useEffect(()=>{
        validateShip(shippingInfo,navigate)
       
    })
    return(
        <div className="home-panel">
             <Steps shipping confirm/>
            <div className="confirm-panel d-flex">
                <div className="con-pan">
                <div className="ship-panel">
                     <h5>Shipping Information</h5>
                     <p className='text-success fw-bold'>Name :{user.name}</p>
                     <p className='d-flex text-secondary fw-bold'>Address :<address >{shippingInfo.address},{shippingInfo.village},{shippingInfo.district},{shippingInfo.state},{shippingInfo.pin}</address></p>
                     <p className='text-secondary fw-bold '>Phone No :{shippingInfo.phone}</p>
                </div>
                <hr></hr>
                <div className="confirm-order-panel">
                <h5>Product Information</h5>
               
                   
                        <Table striped bordered hover size="sm" className=''>

                        <thead>
                          <tr>
                            <th className="text-success">Product Image</th>
                            <th className="text-success">Product Name</th>
                            <th className="text-success">Product Price</th>
                            <th className="text-success">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                        {items.map(item=>(
                          <tr >
                          <td><img className='remove-image ' src={item.image} alt='shirt'/></td>
                           
                          <td className='pt-5 text-secondary'>{item.name}</td>
                            <td className='pt-5 text-success'><span>Rs.<i className='bi bi-currency-rupee'></i>{item.price}</span></td>
                            <td className='pt-5'>{item.quantity}</td>
                          </tr>
                           ))}
                          </tbody>
                 </Table>
                          
                   
                  
                </div>
                </div>
               
                <div className="price-pan">
                
                
                <div className='confirm-cart-price-panel'>
                    <h2 className="result">Order Price</h2>
                        <table className='summary-inner-panel'>
                          <tr>
                           <td className='table-width'><h5>Sub Total</h5></td> <td className='table-width'><h5><span>:{itemCount}</span></h5></td> 
                          </tr>
                          <tr>
                          <td className='table-width'><h5>Total Product Price  </h5></td> <td className='table-width'><h5><span>:<span>Rs.<i className='bi bi-currency-rupee'></i></span>{itemPrice}</span></h5></td>
                          </tr>
                          <tr>
                          <td className='table-width'><h5>Shipping Price </h5></td> <td className='table-width'><h5><span>:<span>Rs.<i className='bi bi-currency-rupee'></i></span>{shippingPrice}</span></h5></td>
                          </tr>
                          <tr>
                          <td className='table-width'><h5>Total Price </h5></td> <td className='table-width'><h5><span>:<span>Rs.<i className='bi bi-currency-rupee'></i></span>{totalPrice}</span></h5></td>
                          </tr>
                          <tr ><td className='table-width' colSpan={2}> <button  onClick={proceedPyment} className="place-order bg-primary text-light fw-bolder">Place Order</button></td></tr>
                        </table>
                </div>
               
                </div>
            </div>
        </div>
    )
}
export default Confirm;