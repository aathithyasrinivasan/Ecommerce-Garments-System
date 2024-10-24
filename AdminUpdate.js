import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Fragment, useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProduct } from '../actions/productAction';
import {ToastContainer,toast} from 'react-toastify'
import { getProduct } from '../actions/productAction';
import { clearError, clearnewProduct} from '../slice/productSlice';
import Loader from './Loader';
function AddUpdate(){

  const {product}=useSelector(state=>state.productState)
  const dispatch=useDispatch();
  const {id}=useParams();
 
useEffect(()=>{
    dispatch(getProduct(id))
  
    setName(product.name);
    setPrice(product.price);
    setOfferprice(product.offer);
    setDescription(product.description);
    setFabric(product.Fabric);
    setCategory(product.category);
    setMade(product.Madefor);
    setStock(product.stock)
},[dispatch,id])
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [offerprice,setOfferprice]=useState("");
    const [description,setDescription]=useState("");
    const [fabric,setFabric]=useState("");
    const [category,setCategory]=useState("");
    const [made,setMade]=useState("");
    const [stock,setStock]=useState(0);
    const [images,setImages]=useState([]);
    const [imagespreview,setImagesPreview]=useState([]);
    const [imagesCleared,setImagesCleared]=useState(false)
    const navigate=useNavigate();


    const {loading,isProductUpdated,error}=useSelector(state=>state.productState)
    const onImageChange=(e)=>{
      const files=Array.from(e.target.files);
      files.forEach(file=>{
        const reader=new FileReader();
        reader.onload=()=>{
          if(reader.readyState==2){
             setImagesPreview(oldArray=>[...oldArray,reader.result])
             setImages(oldArray=>[...oldArray,file])
          }
        }
        reader.readAsDataURL(file)
      })
    }
    const submitHandler=(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append('name',name)
      formData.append('price',price);
      formData.append('offer',offerprice);
      formData.append('description',description)
      formData.append('Madefor',made);
      formData.append('Fabric',fabric);
      formData.append('category',category)
      formData.append('stock',stock);
      formData.append('imagesCleared',imagesCleared)
      images.forEach(image=>{
        formData.append('images',image)
      })
      dispatch(UpdateProduct(id,formData))
    }
    useEffect(()=>{
       if(isProductUpdated){
          toast.success("Product Updated")
          dispatch(clearnewProduct());
          navigate('/stock')
          return;
       }
       if(error){
        toast.error(error)
        return;
      }
    },[isProductUpdated,error,dispatch])
   const clearimagesHandler=()=>{
    setImages([])
    setImagesPreview([])
    setImagesCleared(true)
   }
   useEffect(()=>{
    if(product._id){
      setName(product.name);
      setPrice(product.price);
      setOfferprice(product.offer);
      setDescription(product.description);
      setCategory(product.category);
      setFabric(product.Fabric);
      setMade(product.Madefor);
      setStock(product.stock);
      let images=[]
      product.images && product.images.forEach(image=>{
         images.push(image.image)
      })
      setImagesPreview(images)
    }
   },[product])
    return(
        <div className="home-panel bg-light">
          {loading ?<Loader/>:
          <Fragment>
           <Link to='/Seller'>
        <button className='dashboard bg-primary text-light fw-bold mt-2'><i className='bi bi-box-arrow-left px-2'></i>Dashboard</button>
        </Link>
          <ToastContainer/>         
             <form onSubmit={submitHandler}>
                <div className="Add-panel d-flex ">                 
                  <div className='px-2'>  
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div >
                            <Form.Label column sm="2" className='pt-4  '>
                                Product Name
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Enter Product Name" value={name} onChange={e=>setName(e.target.value)} />
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4  '>
                              Product Original Price
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Enter Product Original Price"  value={price} onChange={e=>setPrice(e.target.value)}/>
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4  '>
                              Product Offer Price
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Enter Product Offer Price"  value={offerprice} onChange={e=>setOfferprice(e.target.value)}/>
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4  '>
                              Description
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Enter Product Description" value={description} onChange={e=>setDescription(e.target.value)} />
                            </Col>
                          </div>
                      </Form.Group>
                      </div>
                      <div className='px-5'>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4  '>
                              Product Stock
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Enter Product Stock" value={stock} onChange={e=>setStock(e.target.value)} />
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4 '>
                              Made For
                            </Form.Label>
                            <Col sm="10">
                            <select name="made" placeholder='Select Made For' className="cancel-order" id="Category" value={made} onChange={e=>setMade(e.target.value)}>
                                <option for="made" value="" disabled selected hidden>Choosh Made For</option>
                                <option for="made" value="Female">Female</option>
                                <option for="made" value="Male">Male</option>
                            </select>
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4 '>
                              Fabric
                            </Form.Label>
                            <Col sm="10">
                            <select name="fabric" placeholder='Select Made For' className="cancel-order" id="Category"value={fabric} onChange={e=>setFabric(e.target.value)} >
                                <option for="fabric" value="" disabled selected hidden>Choosh Fabric</option>
                                <option for="fabric" value="Cotton">Cotton</option>
                                <option for="fabric" value="Silk">Silk</option>
                                <option for="fabric" value="Polyester">Polyester</option>
                                <option for="fabric" value="Lycra">Lycra</option>
                                <option for="fabric" value="Jeans">Jeans</option>
                                <option for="fabric" value="Chiffon">Chiffon</option>
                                <option for="fabric" value="Semisilk">Semisilk</option>
                            </select>
                            </Col>
                          </div>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                        <Form.Label column sm="2" className='pt-4 '>
                              Category
                            </Form.Label>
                            <Col sm="10">
                            <select name="category" placeholder='Select Made For' className="cancel-order" id="Category" value={category} onChange={e=>setCategory(e.target.value)}>
                                <option for="category" value="" disabled selected hidden>Choose Product Category</option>
                                <option for="category" value="Shirt">Shirt</option>
                                <option for="category" value="Phant">Phant</option>
                                <option for="category" value="Tshirt">Tshirt</option>
                                <option for="category" value="Saree">Saree</option>
                                <option for="category" value="Silk saree">Silk saree</option>
                            </select>
                            </Col>
                          </div>
                      </Form.Group>
                      </div>
                      <div>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                          <div>
                            <Form.Label column sm="2" className='pt-4  '>
                              Image
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="file" multiple onChange={onImageChange}/>
                            </Col>
                          </div>
                      </Form.Group>
                      {imagespreview.length>0 && <span onClick={clearimagesHandler} style={{cursor:"pointer"}}><i  className='bi bi-archive-fill text-danger pb-2 fs-2'></i></span>}
                     {product.images && product.images.map(image=>{
                      <img src={image.image} alt='image' key={image._id} height='55' width='52'/>
                     })}
                      </div>
                </div>
                <button className='bg-primary fw-bold text-light add-button' disabled={loading}>Update Product</button>
             </form>
             </Fragment>
           }
  </div>
    );
}
export default AddUpdate;