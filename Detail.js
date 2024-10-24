import { Fragment, useEffect, useState } from 'react';
import { getProduct } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link, Navigate, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Metadata from './Metadata'
import Carousel from 'react-bootstrap/Carousel'
import { addCart } from '../actions/cartActions';
import { addBuy } from '../actions/buyAction';
import { ToastContainer, toast } from 'react-toastify';

function Detail(){
    const navigate=useNavigate()
    const [Quantity,setQuantity]=useState(1)
    const increaseQty=()=>{
        const count=document.querySelector('.qty')
        if(product.stock===0||count.valueAsNumber>=product.stock)return;
        const qty=count.valueAsNumber+1;
        setQuantity(qty)
    }
    const deccreaseQty=()=>{
        const count=document.querySelector('.qty')
        if(count.valueAsNumber===1)return;
        const qty=count.valueAsNumber-1;
        setQuantity(qty)
    }
    const buyHandler=()=>{
        dispatch(addBuy(product._id,Quantity))
        navigate('/buyshipping')
    }
   
    const {loading,product}=useSelector((state)=>state.productState);
    const dispatch=useDispatch();
    const {id}=useParams();
   
  useEffect(()=>{
      dispatch(getProduct(id))
  },[dispatch,id])
  return(
    <>
        <Metadata title={'Product'}/>
        {loading ? <Loader/> :   
            <div className="home-panel">
                <h2 className='home-heading fs-5 pt-3'>{product.name}</h2>
                    <div className="product-click-panel container">
                        <div className='images-panel'>
                        <Carousel className='image '>
                            {product.images && product.images.map(image =>
                            <Carousel.Item key={image._id}>
                                <li> <img className='image-panel' src={image.image} alt='OfferList'/></li>
                            </Carousel.Item>
                            )}
                        </Carousel>
                            <div>         
                                <button id='buy' className='bg-danger text-light fw-bolder'  disabled={product.stock===0?true:false}
                                onClick={buyHandler}><i className='bi-bag nav-elements text-light fw-bold px-2'></i>Buy</button>
                                <button id='buy' disabled={product.stock===0?true:false}
                                onClick={()=>dispatch(addCart(product._id,Quantity) )} className='bg-primary text-light fw-bolder'><i className='bi bi-cart text-light fw-bold px-2 nav-elements'></i>Add to cart</button>
                            </div>
                        </div> 
                    <div className='detail-panel'>
                        <h5>Product Details</h5>
                        <div className='product-detail bg-light container px-4 d-flex mb-3 mt-3'>
                            <div className='w-5 '>
                        <p className='text-success  fs-5'>{product.name}</p>
                        <div className='d-flex pb-2'>
                            <h3 className='text-secondary  pb-1 fs-5'><span>Rs.<i className='bi bi-currency-rupee'></i></span>{product.price}</h3>
                            <h3 disabled id='off'  className='text-secondary fw-bold pt-1 px-2 fs-6  '><span >Rs.<i className='bi bi-currency-rupee'></i></span>{product.offer}</h3>
                        </div>
                    
                        <h3 classNmae='fs-6 pt-2'><span className='bg-success rounded-4 text-light px-1'>{product.ratings}<i className='bi bi-star fs-6 pb-1'></i></span> Ratings</h3>
                            <h3 className='d-flex pt-2 fs-6'>Delivery       :{product.price > 400 ?<p>Free Delivery</p> :<p>Rs.<i className='bi bi-currency-rupee'>40</i></p>} </h3>
                        
                            <h3 className='d-flex pt-2'>Stock :{product.stock > 0 ?<p className='fw-bolder text-success'>In stock</p> :<p className='text-danger'>Out of Stock</p>} </h3>
                            <div className='d-flex q-block'>
                            <button className='in-btn mx-2'onClick={deccreaseQty} ><i className='bi bi-dash-circle'></i></button><input type="number" className="t-qty mx-2 qty px-2" value={Quantity}/><button className='dn-btn mx-2' onClick={increaseQty}><i className='bi bi-plus-circle'></i></button>
                            </div>
                            </div>
                            
                            {/* <div className='d-flex' ><h3 className='h-1' >Quantity</h3><input type='number' defaultValue={1} className='qty mx-3'/></div> */}
                        </div>
                       {product.category==="Shirt"||product.category==="Phant"||product.category==="Tshirt" &&
                        <>
                        <h5>Product Size</h5>
                        <div className='size-panel bg-light mt-3 mb-3'>
                            <ul>
                                <li><p>S</p></li>
                                <li><p>M</p></li>
                                <li><p>L</p></li>
                                <li><p>XL</p></li>
                                <li><p>XXL</p></li>
                                <li><p>XXL</p></li>
                            </ul>
                    </div>
                    </>
}
                    <ToastContainer/>
                    <h5>Product Description</h5>
                    <div className='product-detail-panel bg-light mt-3 mb-3'>
                            <p>Name : CHECKS SHIRT FOR MEN
                                <br></br>
                                    Fabric : {product.Fabric}
                                    <br></br>
                                    Sleeve Length : Long Sleeves
                                    <br></br>
                                    Pattern : Checked
                                    <br></br>
                                    Sizes :  
                                    <br></br>
                                    M (Chest Size : 40 in)<br></br>
                                    L (Chest Size : 42 in)<br></br>
                                    XL (Chest Size : 44 in)<br></br>
                                    CHECKS SHIRT FOR MEN<br></br>
                                    Country of Origin : India
                            </p>
                    </div>
                <h5>Seller Detail</h5>
                    <div className='seller-detail bg-light mt-3 mb-3'>
                            <h3>sold by</h3>
                            <h3 className='text-success mx-5'>{product.seller}</h3>
                    </div> 
                    </div>
                </div>
            </div>
        }    
    </>
  );
}
export default Detail;