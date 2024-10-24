import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Loader from './Loader';

function Product(){
   const dispatch=useDispatch();
   const {products,loading}=useSelector((state)=>state.productsState)
   useEffect(()=>{
       dispatch(getProducts)
   },[])
    return(
         <ul className='product-outer-panel'>   
          { products && products.map(product =>(
                <Link to={`/product/${product._id}`} className='detail'>
                {  loading?<Loader/>:
                  <li className='product-inner-panel'>
                  <div>
                    <img src={product.images[0].image} alt='shirt'/>
                    <p className='text-success fw-bold'>{product.name} </p>
                    <h3 className='text-secondary fw-bold pb-1'><span>Rs.<i className='bi bi-currency-rupee'></i></span>{product.price}</h3>
                    <h3 ><span className='bg-success rounded-4 text-light px-1'>{product.ratings}<i className='bi bi-star fs-6 pb-1'></i> </span>Rating</h3>
                  </div>           
                </li>
                }
                </Link>
          ))}
           </ul>
     
    );
}
export default Product;