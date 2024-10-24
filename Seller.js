import Add from '../images/Add_product.png'
import Request from '../images/Requests.jpg'
import Remove from '../images/Remove_product.png'
import Stack from '../images/Stack.jpg'
import Update from '../images/product_update.png'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../actions/productsAction'
import { useEffect } from 'react'

function Seller(){
    const {products=[],loading}=useSelector((state)=>state.AdminProductsState)
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.userState)
    const {orderDetail}=useSelector(state=>state.orderState)
    let outOfStock=0;
    if(products.length>0){
       products.forEach(product=> {
         if(product.stock===0){
            outOfStock=outOfStock+1
         }
       });
    }

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <div className="home-panel">
             <div className="admin-panel">
                    <ul className='admin-outer-panel'>
                    <Link to="/addProduct" className='nav-link'>
                        <li>
                            <img src={Add} alt='offer'/>
                            <p>Add products</p>
                        </li>
                    </Link>
                    <Link to="/RemoveProduct" className='nav-link'>
                        <li>
                            <img src={Remove} alt='offer'/>
                            <p>Remove Products</p>
                        </li>
                    </Link>
                    <Link to='/Updateproduct' className='nav-link'>
                        <li> 
                            <img src={Update} alt='offer'/>
                            <p>Update Product</p>
                        </li>
                    </Link>
                    <li>
                        <img src={Request} alt='offer'/>
                        <p>Product Request</p>
                    </li>
                    <Link to='/stock' className='nav-link'>
                    <li>
                        <img src={Stack} alt='offer'/>
                        <p>Stack</p>
                    </li>
                    </Link>
                   </ul>    
                </div>
                <div className='total-products'>
                    <h4>Amount</h4>
                    <h5>350</h5>
                </div>
                
                <div className='tot-panel'>
                    <div className='sold-products'>
                        <h4>Product</h4>
                        <h5>{products.length}</h5>
                    </div>
                    <div className='remaining-products'>
                        <h4>Orders</h4>
                        <h5>{orderDetail.length}</h5>
                    </div>
                    <div className='sold-products'>
                        <h4>Users</h4>
                        <h5>{user.length}</h5>
                    </div>
                    <div className='out-of-stack'>
                        <h4>Out Of Stack</h4>
                        <h5>{outOfStock}</h5>
                    </div>
                </div>
        </div>  
    );
}
export default Seller;