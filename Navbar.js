import {Link, useNavigate} from 'react-router-dom'
import Logo from '../images/logo5.png'
import { useState } from "react";
import { useSelector } from 'react-redux';

function Navbar()
{
   const navigate= useNavigate();
   const [keyword,setKeyword]=useState("");
   const searchhandler=(e)=>{
       e.preventDefault();
       navigate(`/search/${keyword}`)
   }
   const checkhandler=()=>{
    navigate('/login?redirect=profile')
}
//   const  [open,setOpen] =useState(false)onClick={()=>open && setOpen(!open)};
  const {items:cartItems}=useSelector(state=>state.cartState)
    return(
        <>
        <div className='nav-bar-panel' >
           <ul className='nav-bar-container'>
               <Link to='/' className='nav-link'>
                   <li><div className='logo'><img id='logo' src={Logo} alt='logo'/></div></li>
               </Link>   
               <li>
                <div className='d-flex'>
                    <form onSubmit={searchhandler} className='d-flex'>
                        <input 
                        type='search'
                        value={keyword} 
                        onChange={(e)=>{setKeyword(e.target.value)}} 
                        placeholder='Search products here...' 
                        id='search-bar'/>
                        <button className='bg-success text-light fw-bolder div-search '>
                            <i className='bi bi-search px-2 fs-4'></i>
                        </button>
                    </form>
                 </div>
                 </li>
               <div className='nav-group pb-3 mx-3'>
               <Link to='/orders' className='nav-link'>
                  <li ><i className='bi-bag nav-elements'> Orders</i></li>
               </Link>
                    
               <Link to='/cart'className='nav-link'>
                  <li className='d-flex '><i className='bi bi-cart nav-elements pt-1 pb-1'>Cart</i><p className='  px-2 rounded-5 bg-primary text-light'>{cartItems?cartItems.length:null}</p></li>
               </Link>
              
                  <li onClick={checkhandler}><i className='bi bi-person  my-auto bg-primary text-light fw-bold rounded-4 p-2 nav-elements'>Profile</i> </li>
               </div>
           </ul>
          
        </div>
        </>
    );
}
export default Navbar;