import { useEffect} from 'react';
import {MDBDataTable} from 'mdbreact'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../actions/AdminproductsAction'
import { Link } from 'react-router-dom';

function AdminProduct(){
    const dispatch=useDispatch();
    const {products,loading}=useSelector((state)=>state.AdminProductsState)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
   
    const setOrder=()=>{
        const data={
            columns:[
                {
                    label:"Image",
                    field:'images',
                    sort:'asc'
                }, 
            {
                label:"Product Name",
                field:'name',
                sort:'asc',
                width:150,
            },  
                  
            {
                label:"Amount",
                field:'amount',
                sort:'asc'
            },
            {
                label:"Stock",
                field:'stock',
                sort:'asc'
            },
            {
                label:"Actions",
                field:'actions',
                sort:'asc'
            }
        ],
        rows:[]
        }
        
       products && products.map(product=>(
            data.rows.push({
                images:(<img className='order-img' src={product.images[0].image} alt='image'/>),
                name:(<p className='pro-dete text-success fw-bold'>{product.name}</p>),
                amount:(<p className='pro-dete'>{product.price}</p>),
                stock:(<p className='pro-dete'>{product.stock}</p>),
                actions:(<p className='pro-dete'><i className='bi bi-eye-fill'></i></p>)
              })
            ))
        return data
    }
    return(
        
        <div className="home-panel bg-light">   
         <Link to='/Seller'>
        <button className='dashboard bg-primary text-light fw-bold mt-2'><i className='bi bi-box-arrow-left px-2'></i>Dashboard</button>
        </Link>
           <h3 className='home-heading'>All Products Stock</h3>
           <MDBDataTable className='order-tab' striped hover bordered data={setOrder() }/>
        </div>
    );
}
export default AdminProduct;