import React, { Fragment } from 'react';
import shirt from '../images/shirt.jpg'
import phant from '../images/phant.jpg'
import saree from '../images/saree.jpg'
import tshirt from '../images/tshirt.jpg'
import silk from '../images/silk.jpg'
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.JPG'
import offer4 from '../images/offer4.JPG'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import Metadata from './Metadata'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Loader from './Loader';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Home()

{
    const [price,setPrice]=useState(10000);
    const [fabric,setFabric]=useState(null);
    const [category,setCategory]=useState(null);
    const [priceChanged,setPriceChanged]=useState(null);
    const [made,setMade]=useState(null);
    const dispatch=useDispatch();
    const {products,loading}=useSelector((state)=>state.productsState)
    useEffect(()=>{
        dispatch(getProducts(null,category,fabric,made,priceChanged))
    },[dispatch,category,fabric,made,priceChanged])
   
    return(
       <Fragment>
       <Metadata title={'Welcome'}/>
            <div className='home-panel '>
                {loading ? <Loader/> :
                <Fragment>
                <h2 className='home-heading'>Offers Zone</h2>
                <div className='offer-panel'>
                <ul className='offers-block '>           
                    <Carousel>
                        <Carousel.Item>
                            <li> <img src={offer1} alt='OfferList'/></li>
                        </Carousel.Item>
                        <Carousel.Item>
                            <li> <img src={offer2} alt='OfferList'/></li>
                        </Carousel.Item>
                        <Carousel.Item>
                            <li> <img src={offer3} alt='OfferList'/></li>
                        </Carousel.Item>
                        <Carousel.Item>
                        <li> <img src={offer4} alt='OfferList'/></li> 
                        </Carousel.Item>
                    </Carousel>
                </ul>
          </div>
          <h2 className='home-heading'>Top Categories</h2>
          <div className='category-panel '>
                        <ul className='category-inner'>
                            <li >
                                <div> 
                                    <img src={shirt} height={80} width={100} alt='shirt'/>
                                    <p>Men Shirt</p>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <img src={phant} height={80} width={100} alt='shirt'/>
                                    <p>Men Phant</p>
                                </div>    
                            </li>
                            <li>
                                <div> 
                                    <img src={tshirt} height={80} width={100} alt='shirt'/>
                                    <p>T-Shirt</p>
                                 </div>
                            </li>
                            <li>
                                <div>
                                    <img src={saree} height={80} width={100} alt='saree'/>
                                    <p>Cotton Saree</p>
                                </div>  
                            </li>
                            <li>
                                <div> 
                                   <img src={silk} height={80} width={100} alt='saree'/>
                                   <p>Silk Saree</p>
                                </div>
                            </li>
                        </ul>
          </div>
          <h2 className='home-heading'>Products for you</h2>
          <div className='product-panel'>
          <div className='filter-panel'>
        <h2 className='result'>Filter<i className="bi bi-filter-square m-2 fw-bolder"></i></h2>
            <ul className='filter-inner-panel bg-light'>
                <li className='filter-align d-block'>
                    <div>
                        <h2 className="filter-heading">Gender</h2>
                    </div>
                    <div className='px-4'>
                    <Form.Check
                        key='All'
                       
                        label='All'
                        checked={made===null}
                        onChange={(e)=>
                            {
                                setMade(null);             
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
                     <Form.Check
                        key='Male'
                     
                        label='Male'
                        checked={made==='Male'}
                        onChange={(e)=>
                            {
                                setMade('Male');
                               
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
                      <Form.Check
                        className='pt-2'
                        key='Female'
                    
                        label='Female'
                        checked={made==='Female'}
                        onChange={(e)=>
                            {
                                setMade('Female');
                                
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
                    </div>
                </li>
                <hr></hr>
                <li>
                    <h2 className="filter-heading">Price</h2>
                    <input type='range' min={100} max={10000} defaultValue={3000} onMouseUp={()=>setPriceChanged(price)} onChange={(e)=>{
                        setPrice(e.target.value)
                    }} 
                    value={price} id='slider'  />
                    <output >{price}</output>
                </li>
                <hr></hr>
                <h2 className="filter-heading">Fabric</h2>
                <li className='filter-align px-4'>    
                    <Form.Check       
                        key='All'
                        label='All'
                        checked={fabric===null}
                        onChange={(e)=>
                            {
                                setFabric(null);
                            
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
                     <Form.Check
                        key='Cotton'
                        label='Cotton'
                        checked={fabric==='Cotton'}
                        onChange={(e)=>
                            {
                                setFabric('Cotton');
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
                      <Form.Check          
                        key='Silk'
                     
                        label='Silk'
                        checked={fabric==='Silk'}
                        onChange={(e)=>
                            {
                                setFabric('Silk');
                            
                            }
                        }
                        name="group1"
                        id={`inline-2`}
                    />
            <Form.Check
                key='Polyester'
                label='Polyester'
                checked={fabric==='Polyester'}
                onChange={(e)=>
                    {
                        setFabric('Polyester');
                    
                    }
                }
                name="group1"
                id={`inline-2`}
            />
            <Form.Check
                
                key='Lycra'
            
                label='Lycra'
                checked={fabric==='Lycra'}
                onChange={(e)=>
                    {
                        setFabric('Lycra');
                        
                    }
                }
                name="group1"
                id={`inline-2`}
            />
          <Form.Check       
            key='Jeans'
            inline
            label='Jeans'
            checked={fabric==='Jeans'}
            onChange={(e)=>
                {
                    setFabric('Jeans');
                    
                }
            }
            name="group1"
            id={`inline-2`}
        />
          <Form.Check
            
            key='Semisilk'
          
            label='Semisilk'
            checked={fabric==='Semisilk'}
            onChange={(e)=>
                {
                    setFabric('Semisilk');
                }
            }
            name="group1"
            id={`inline-2`}
        />
          <Form.Check
            key='Chiffon'
            label='Chiffon'
            checked={fabric==='Chiffon'}
            onChange={(e)=>
                {
                    setFabric('Chiffon');
                }
            }
            name="group1"
            id={`inline-2`}
        />
                </li>
                <hr></hr>
                <h2 className="filter-heading">Category</h2>
                <li className='filter-align px-4'>   
                     <Form.Check
                        key='All' 
                        label='All'
                        checked={category===null}
                        value='Shirt'
                        onChange={(e)=>
                            {
                                setCategory(null);                   
                            }
                        }
                        
                    />
                     <Form.Check
                        key='Shirt'
                      
                        label='Shirt'
                        checked={category==='Shirt'}
                        value='Shirt'
                        onChange={(e)=>
                            {
                               setCategory('Shirt');
                              
                               
                            }
                        }
                        
                    />
                       <Form.Check
                        key='Phant'
                      
                        label='Phant'
                        checked={category==='Phant'}
                        value='Phant'
                        onChange={(e)=>
                            {
                               setCategory('Phant');
                            }
                        }
                    />
                       <Form.Check
                        key='Tshirt'
                       
                        label='Tshirt'
                        checked={category==='Tshirt'}
                        value='Tshirt'
                        onChange={(e)=>
                            {
                               setCategory('Tshirt');
                              
                            }
                        }
                    />
                       <Form.Check
                        key='Saree'
                       
                        label='Saree'
                        checked={category==='Saree'}
                        value='Saree'
                        onChange={(e)=>
                            {
                               setCategory('Saree');
                               
                            }
                        }
                      
                    />
                       <Form.Check
                        key='Silk saree'
                       
                        label='Silk saree'
                        checked={category==='Silk saree'}
                        value='Silk saree'
                        onChange={(e)=>
                            {
                               setCategory('Silk saree');
                              
                            }
                        }
                
                    />
                      
                </li>
            </ul>
          </div>
                 <ul className='product-outer-panel'>   
                        { products && products.map(product =>(
                        <Link to={`/product/${product._id}`} className='detail'>
                            {  
                            <li className='product-inner-panel bg-light'>
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
              </div>
              <h2 className='home-heading'>About</h2>
              <div className='about-panel'>
                  <p>Welcome to [Your E-commerce Garments System Name], your destination for trendy and fashionable garments online. Our platform is dedicated to providing you with the latest styles, high-quality garments, and an exceptional shopping experience.</p>
              <b>Our Mission</b>
              <p>At [Your E-commerce Garments System Name], our mission is to revolutionize the way you shop for garments online. We strive to offer a curated selection of garments from top brands, independent designers, and emerging labels, ensuring you always stay ahead of the fashion curve.</p>
              <b>What We Offer</b>
              <p><b>Wide Selection: </b>Explore a diverse range of garments, including clothing items, accessories, and footwear, to suit every style and occasion.<br></br>
<b>Quality Assurance:</b> Shop with confidence knowing that every garment on our platform undergoes strict quality checks to ensure durability, comfort, and style.<br></br>
<b>Personalized Recommendations: </b>Discover new styles and wardrobe essentials tailored to your preferences with our personalized recommendation engine.<br></br>
<b>Secure Shopping:</b> Enjoy a safe and secure shopping experience with encrypted transactions, secure payment gateways, and data protection measures.<br></br>
<b>Exceptional Customer Service:</b> Our dedicated customer support team is here to assist you with any queries, concerns, or feedback you may have. Your satisfaction is our top priority.</p>
              </div>
                </Fragment>
                }
            </div>
          
        </Fragment>      
    );
}
export default Home;