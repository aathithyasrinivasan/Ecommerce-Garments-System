import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Metadata from './Metadata'
import { Fragment, useEffect, useState } from 'react';
import {login} from '../actions/userAction'
import {useDispatch, useSelector} from 'react-redux'
import {ToastContainer,toast} from 'react-toastify'

function PlaintextExample() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error,isAuthenticateUser} =useSelector(state=>state.userState)
  const location=useLocation()
  const redirect=location.search?'/'+location.search.split('=')[1]:'/';
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
  }
  useEffect(()=>{
    if(isAuthenticateUser){
        navigate(redirect)       
    }
     if(error){
         toast.error(error)
         return
        }
  },[dispatch,error,isAuthenticateUser,navigate])
  return (
    <div className='home-panel bg-light'>
        <Metadata title={'Login Page'}/>
          <Fragment>
               <div className='Login-panel bg-light'>
                  <form onSubmit={submitHandler}>
                       <i className='bi bi-person-circle fs-1' id='profile'></i>``
                       <hr></hr>
                       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <Form.Label column sm="2" className='pt-4  '>
                             Email
                          </Form.Label>
                          <Col sm="10">
                             <Form.Control type="text" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                              <Form.Label column sm="2" className='pt-4 px-2 '>
                                     Password
                              </Form.Label>
                              <Col sm="10">
                                     <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                              </Col>
                          </Form.Group>
                          < button  disabled={loading}>Login</button>
                          <Link to='/Register' className='nav-link'>
                              <p className='reg-text text-danger'>New User?</p>
                          </Link>
                  </form>
                  <ToastContainer />
               </div>
          </Fragment>
    </div>
  );
}
export default PlaintextExample;