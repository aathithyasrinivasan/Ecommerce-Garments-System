import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Steps from './Steps';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify';
export const validateShip=(shippingInfo,navigate)=>{
   if(!shippingInfo.address||!shippingInfo.city||!shippingInfo.district||!shippingInfo.state||!shippingInfo.pincode||!shippingInfo.phone){
      toast.error("Please Fill Shipping Information") 
      navigate('/shipping')
      
   }
 }
function Address(){
 
   const {shippingInfo={}}=useSelector(state=>state.cartState)
    const [address,setAddress]=useState(shippingInfo.address)
    const [city,setCity]=useState(shippingInfo.city)
    const [district,setDistrict]=useState(shippingInfo.district)
    const [pincode,setPinCode]=useState(shippingInfo.pincode)
    const [phone,setPhone]=useState(shippingInfo.phone)
    const [state,setState]=useState(shippingInfo.state)
    const country="US"
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        
        dispatch(saveShipping({address,city,district,state,pincode,phone,country}))
        navigate('/confirm')
    }

    return(
      <>
        <div className="home-panel bg-light"> 
        <Steps shipping />  
         <form onSubmit={submitHandler}>
              <div className="Address-panel d-flex  ">
                <div className='px-2 '>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div >
                          <Form.Label column sm="2" className='pt-4  '>
                              Address
     
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control value={address}  onChange={e=>setAddress(e.target.value)} type="text" placeholder="Enter Street/Flat/Door No/Building"  />
                          </Col>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div>
                          <Form.Label column sm="2" className='pt-4  '>
                             City
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" value={city}  onChange={e=>setCity(e.target.value)} placeholder="Enter Village/City/Town/Place" />
                          </Col>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div>
                          <Form.Label column sm="2" className='pt-4  '>
                             District
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" value={district}  onChange={e=>setDistrict(e.target.value)} placeholder="Enter District"  />
                          </Col>
                        </div>
                    </Form.Group>
                   
                    </div>
                    <div className='px-5'>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div>
                          <Form.Label column sm="2" className='pt-4  '>
                             Pin Code
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" value={pincode}  onChange={e=>setPinCode(e.target.value)} placeholder="Enter Pin Code"  />
                          </Col>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div>
                          <Form.Label column sm="2" className='pt-4 '>
                             PhoneNo
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" value={phone}  onChange={e=>setPhone(e.target.value)} placeholder="Enter Phone No"  />
                          </Col>
                        </div>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <div>
                          <Form.Label column sm="2" className='pt-4 '>
                             State
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" value={state}  onChange={e=>setState(e.target.value)} placeholder="Enter State"  />
                          </Col>
                        </div>
                    </Form.Group>
                    </div>
                    <ToastContainer/>
              </div>
              <button className='bg-primary fw-bold text-light payments'>Confirm Order</button>
              </form>              
        </div>
        </>
    )
}
export default Address;
