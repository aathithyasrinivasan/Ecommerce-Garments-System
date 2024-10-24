import { useEffect} from 'react';
import {MDBDataTable} from 'mdbreact'
import { useDispatch,useSelector } from 'react-redux';
import {userOrders as userOrdersAction} from '../actions/orderAction'

function Orders(){
    const dispatch=useDispatch()
   const {userOrders=[]}=useSelector(state=>state.orderState)
   useEffect(()=>{
       dispatch(userOrdersAction)
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
                label:"Number of Items",
                field:'numOfItems',
                sort:'asc',
                width:'fit-content',
            },
            {
                label:"Amount",
                field:'amount',
                sort:'asc'
            },
            {
                label:"Status",
                field:'status',
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
        
        userOrders.forEach(userOrder=>{
            let productNames = "";
            userOrder.orderItems.forEach(item => {
                productNames += item.name + ", ";
              });
              productNames = productNames.slice(0, -2);
              let images =""
               userOrder.orderItems.map(item => {
                  return images +=item.image ;
                });
                
            data.rows.push({
                images:(<img className='order-img' src={images} alt='image'/>),
                name:productNames,
                numOfItems:userOrder.orderItems.length,
                amount:(<p>{userOrder.totalPrice}</p>),
                status:(<p className='pro-dete'>{userOrder.orderStatus}</p>),
                actions:(<p className='pro-dete'><i className='bi bi-eye-fill'></i></p>)
            })
        })
        return data
    }
    return(
        <div className="home-panel bg-light">   
           <h3 className='home-heading'>Your Orders</h3>
           <MDBDataTable className='order-tab' striped hover bordered data={setOrder() }/>
        </div>
    );
}
export default Orders;