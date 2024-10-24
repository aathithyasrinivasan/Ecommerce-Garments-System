import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../actions/AdminproductsAction'
import { deleteProduct } from '../actions/productAction';
import {ToastContainer,toast} from 'react-toastify'
import { cleardeleteProduct } from '../slice/productSlice';
import { useNavigate } from 'react-router-dom';

function RemoveProduct() {
  const navigate=useNavigate();
  const deleteHandler=(e,id)=>{
    e.target.disabled=true;
    dispatch(deleteProduct(id))
  }
  const dispatch=useDispatch();
  const {products,loading,error}=useSelector((state)=>state.AdminProductsState)
  const {isProductDeleted,error:deleteError}=useSelector(state=>state.productState)
  useEffect(()=>{
      dispatch(getProducts())
      if(isProductDeleted){
        toast.success("Product Deleted")
        dispatch(cleardeleteProduct());
        return;
     }
     if(error || deleteError){
      toast.error(error)
      return;
    }
  },[dispatch,deleteError,error,isProductDeleted])
 
  return (
    <div className='home-panel'>
        <div className='remove-product-panel'>
        <Link to='/Seller'>
        <button className='dashboard bg-primary text-light fw-bold mt-2'><i className='bi bi-box-arrow-left px-2'></i>Dashboard</button>
        </Link>
        <h3 className='home-heading'>Remove Product</h3>
    <Table striped bordered hover size="sm" className=''>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th className='remove-img-pan'>Product Image</th>
          <th>Product Price</th>
          <th>Product Stock</th>
          <th className='text-align-centre'>Remove</th>
        </tr>
      </thead>
      <tbody>
      {products && products.map(product=>(
        <tr >
          
          <td className='pt-5'>{product._id}</td>
          <td className='pt-5'>{product.name}</td>
          <td className='remove-img-pan'><img className='remove-image' src={product.images[0].image} alt='shirt'/></td>
          <td className='pt-5'>{product.price}</td>
          <td className='pt-5'>{product.stock}</td>
          <td className='pt-4'>  <button className='rem-btn' onClick={e=>deleteHandler(e,product._id)}><i  className='bi bi-archive-fill text-danger pb-2 fs-2'></i></button></td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  );
}

export default RemoveProduct;