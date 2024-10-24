import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Profile(){
    const {user}=useSelector(state=>state.userState)
    return(
        <div className="home-panel d-flex">
            <div className="profile-det d-flex">
            <div className="pro-nav">
            <ul >
                    <Link to='/orders' className="nav-link">
                    <li><p>My Orders</p></li>
                    </Link>
                    <hr></hr>
                    <Link to='/cart' className="nav-link">
                    <li><p>My Cart</p></li>
                    </Link>
                    <hr></hr>
                    {user.role==='admin' &&
                    <Link to='/Seller' className='nav-link'>
                    <li><p>Dashboard</p></li>
                    <hr></hr>
                    </Link>}
                    <li><p>Logout</p></li>
                </ul>
            </div>
            <div className="pro-det">
               <i className='bi bi-person-circle fs-1' id='profiles'></i>  
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            </div>
            {/* <div className='profile-outer-panel'>
            <i className='bi bi-person-circle fs-1' id='profile'></i>
            <h5 style={{textAlign:"center"}}>Aathithya</h5>
            <hr></hr>
                <ul className="profile-panel">
                    <Link to='/orders' className="nav-link">
                    <li><p>My Orders</p></li>
                    </Link>
                    <Link to='/orders' className="nav-link">
                    <li><p>My Whishes</p></li>
                    </Link>
                    <Link to='/cart' className="nav-link">
                    <li><p>Cart</p></li>
                    </Link>
                    <Link to='/Seller' className='nav-link'>
                    <li><p>Dashboard</p></li>
                    </Link>
                    <li><p>Logout</p></li>
                </ul>  
            </div> */}
        </div>
    );
}
export default Profile;