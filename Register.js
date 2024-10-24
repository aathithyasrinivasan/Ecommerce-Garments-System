import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Metadata from './Metadata'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState } from 'react';
import {register} from '../actions/regAction'
import {useDispatch, useSelector} from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'

function Register() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
const {loading,error,isAuthenticateUser} =useSelector(state=>state.regState)

  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(register(name,email,password))
  }
  useEffect(()=>{
    if(isAuthenticateUser){
        navigate('/')       
    }
     if(error){
         toast.error(error)
         return
        }
  },[dispatch,error,isAuthenticateUser,navigate])
  return (
    <div className='home-panel '>
      <Metadata title={'Register Page'}/>
        <div className='register-panel bg-light'>
    <form onSubmit={submitHandler}>
        <i className='bi bi-person-circle fs-1' id='profile'></i>
        <hr></hr>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='pt-4'>
          UserName
        </Form.Label>
        <Col sm="10">
        <Form.Control type="text" placeholder="Enter UserName"  value={name} onChange={e=>setName(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='pt-4'>
          Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="text" placeholder="Enter Email"  value={email} onChange={e=>setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2" className='pt-4 px-2'>
            Password
            </Form.Label>
            <Col sm="10">
            <Form.Control type="password" placeholder="Enter Password"  value={password} onChange={e=>setPassword(e.target.value)} />
            </Col>
        </Form.Group>
       
        <button variant="primary"  disabled={loading}>Register</button>
        <Link to='/Login' className='nav-link'>
            <p className='reg-text text-danger'> Already an User?</p>
        </Link>
    </form>
    <ToastContainer/>
    </div>
    </div>
  );
}

export default Register;