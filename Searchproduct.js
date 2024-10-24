import Metadata from './Metadata'
import {Link, useParams} from 'react-router-dom'
import { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Loader from './Loader';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Searchproducts(){
  
    const [made,setMade]=useState(null);
    const [fabric,setFabric]=useState(null);
    const [category,setCategory]=useState(null);
    const dispatch=useDispatch();
    const {keyword}=useParams();
    const [priceChanged,setPriceChanged]=useState(null);
    const {products,loading}=useSelector((state)=>state.productsState)
    const [price,setPrice]=useState(10000);
    useEffect(()=>{
        dispatch(getProducts(keyword,category,fabric,made,priceChanged))
    },[dispatch,keyword,category,fabric,made,priceChanged])
    return(
        <Fragment>
            {loading?<Loader/> :
        <div className='home-panel'>
              <Metadata title={'Search List'}/>
        <h2 className='home-heading'>Search Results for You</h2>
        <div className='product-panel'>
        <div className='filter-panel'>
        <h2 className='result'>Filter<i className="bi bi-filter-square m-2 fw-bolder"></i></h2>
        <ul className='filter-inner-panel'>
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
     </div>
        </div>
}
        </Fragment>
    );
}
export default Searchproducts;