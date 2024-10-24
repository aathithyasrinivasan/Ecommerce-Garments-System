import { Link } from "react-router-dom";

function Steps({shipping,confirm,payment,buyshipping,buyConfirm,buypayment}){
    return(
        
        <div className="steps-panel bg-light">
        <div className="steps">
           {buyshipping || buyConfirm || buypayment?
            <>
            {shipping?
            <Link to='/buyshipping' className="nav-link">
               <div className="Address bg-primary"><p>Address</p></div>
            </Link>:
            <Link to='/buyshipping' className="nav-link">
               <div className="Address"><p>Address</p></div>
            </Link>
            }
            {confirm?(<Link to='/buyconfirm' className="nav-link">                
            <div className="Confirmation bg-primary"><p>Confirmation</p></div>
            </Link>)
            :(<Link to='/buyconfirm' className="nav-link">
            <div className="Confirmation"><p>Confirmation</p></div>
            </Link>)
            }
            {payment?
            <Link to='/payment' className="nav-link">
            <div className="Payment bg-primary"><p>Payment</p></div>
            </Link>:
             <Link to='/payment' className="nav-link">
             <div className="Payment"><p>Payment</p></div>
             </Link>
            }
            </>:<>
            {shipping?
            <Link to='/shipping' className="nav-link">
               <div className="Address bg-primary"><p>Address</p></div>
            </Link>:
            <Link to='/shipping' className="nav-link">
               <div className="Address"><p>Address</p></div>
            </Link>
            }
            {confirm?(<Link to='/confirm' className="nav-link">                
            <div className="Confirmation bg-primary"><p>Confirmation</p></div>
            </Link>)
            :(<Link to='/confirm' className="nav-link">
            <div className="Confirmation"><p>Confirmation</p></div>
            </Link>)
            
            }
            {payment?
            <Link to='/payment' className="nav-link">
            <div className="Payment bg-primary"><p>Payment</p></div>
            </Link>:
             <Link to='/payment' className="nav-link">
             <div className="Payment"><p>Payment</p></div>
             </Link>
            }
            </>
}
        </div>
        </div>
    )
}
export default Steps;