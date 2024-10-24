import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Account from './Components/Account'
import Searchproduct from './Components/Searchproduct'
import Detail from './Components/Detail'
import Orders from './Components/Orders'
import Cart from './Components/Cart'
import Admin from './Components/Admin';
import Seller from './Components/Seller';
import AddProduct from './Components/AddProduct';
import RemoveProduct from './Components/RemoveProduct';
import UpdateProduct from './Components/UpdateProduct';
import Cancel from './Components/Cancel';
import Login from './Components/Login';
import Register from './Components/Register';
import Address from './Components/Address';
import Profile from './Components/Profile';
import {HelmetProvider} from 'react-helmet-async';
import ProdectedRoute from './Components/ProdectedRoute';
import Confirm from './Components/Confirm';
import Payment from './Components/Payment';
import BuyPayment from './Components/buyPayment';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import PaymentSuccess from './Components/PaymentSuccess';
import BuyAddress from './Components/buyAddress';
import BuyConfirm from './Components/buyConfirm';
import AdminProduct from './Components/AdminProduct';
import AdminUpdate from './Components/AdminUpdate';
function App() {
  const [stripeApiKey,setStripeApiKey]=useState('')
  useEffect(()=>{
   
      async function getStripeApiKey(){
      const {data} =await axios.get('/api/v1/stripe')
      setStripeApiKey(data.stripeApiKey)
     }
     getStripeApiKey()
  },[]) 
  return (
    <Router>
      <div className="App">
       <Navbar/>
       <HelmetProvider>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/search/:keyword' element={<Searchproduct/>}/>
          <Route path='/product/:id' element={<Detail/>}/>
          <Route path='/profile' element={<ProdectedRoute><Profile/></ProdectedRoute>}/>
          <Route path='/orders' element={<ProdectedRoute><Orders/></ProdectedRoute>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          
          <Route path='/Seller' element={<ProdectedRoute isAdmin={true}><Seller/></ProdectedRoute>}/>
          <Route path='/addProduct' element={<ProdectedRoute><AddProduct/></ProdectedRoute>}/>
          <Route path='/RemoveProduct' element={<ProdectedRoute isAdmin={true}><RemoveProduct/></ProdectedRoute>}/>
          <Route path='/Updateproduct' element={<UpdateProduct/>}/>
          <Route path='/Cancel' element={<Cancel/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/shipping' element={<ProdectedRoute><Address/></ProdectedRoute>}/>
          <Route path='/buyshipping' element={<ProdectedRoute><BuyAddress/></ProdectedRoute>}/>
          <Route path='/confirm' element={<ProdectedRoute><Confirm/></ProdectedRoute>}/>
          <Route path='/buyconfirm' element={<ProdectedRoute><BuyConfirm/></ProdectedRoute>}/>
          {stripeApiKey &&
          <Route path='/payment' element={<ProdectedRoute><Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements></ProdectedRoute>}/>
        }
        {stripeApiKey &&
          <Route path='/buypayment' element={<ProdectedRoute><Elements stripe={loadStripe(stripeApiKey)}><BuyPayment/></Elements></ProdectedRoute>}/>
        }
          <Route path='/order/success' element={<ProdectedRoute><PaymentSuccess/></ProdectedRoute>}/>
          <Route path='/stock' element={<ProdectedRoute><AdminProduct/></ProdectedRoute>}/>
          <Route path='/admin/product/:id' element={<ProdectedRoute isAdmin={true}><AdminUpdate/></ProdectedRoute>}/>
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
   
  );
}
export default App;
