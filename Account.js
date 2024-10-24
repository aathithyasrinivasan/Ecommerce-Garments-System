import {Link} from 'react-router-dom'
// import React, { useState } from 'react';
function Account()
{
    return(
           <div className="account-panel">
                    <h4 id='user'>Hello User</h4>
                    <hr></hr>
                    <input type="phone" placeholder="Enter your Email or Phone..." className="account-require"/>
                    <input type="password" placeholder="Enter Your Password..." className="account-require"/>
                    <h3> Login</h3>
                    <hr></hr>
                    <p>don't have account|click here to Register</p>
                    <hr></hr>
                    <Link to='/Seller' className='nav-link'>
                       <h4>Seller</h4>
                    </Link>
                    <hr></hr>
                    <Link to='/Admin' className='nav-link'>
                       <h4>Admin</h4>
                    </Link>
            </div>   
    );
    
}
export default Account;