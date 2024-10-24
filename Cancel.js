import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import phant from '../images/phant.jpg'


function Cancel(){
    return(
        <div className="home-panel">
        <ul className='order-panel-detail'>
        <h3 className='home-heading'>Cancel Order</h3>
            <li>
                <div className="order-detail-panel">
                    <div className='order-image-panel'>
                         <img src={phant} alt='saree' className='image-order-panel'/>      
                    </div>   
                    <div className='order-price-panel'>
                         <p className='text-success fw-bold'>Mens stylish shirt  </p>
                         <h3 className='text-secondary fw-bold pb-1'><span>Rs.<i className='bi bi-currency-rupee'></i></span>500</h3>
                         <h3 ><span className='bg-success rounded-4 text-light px-1'>4.5<i className='bi bi-star fs-6 pb-1'></i> </span>Rating</h3>
                         <p className='text-success fw-bold pt-1 '>Delivery:12 Feb 2024</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='order-details-panel'>
                <label>Select Your Reason</label>
                <InputGroup className="mb-3">
                 <select name="category" className="cancel-order" id="Category" placeholder='Select Reason for cancel'>
                     <option for="category" value="category">Wrong address selected</option>
                     <option for="category" value="Shirt">Product delivery time is too long</option>
                     <option value="Phant">Product Price was high</option>
                     <option value="Tshirt">Ordered by mistake</option>
                     <option value="saree">Wrong contact number entered</option>
                     <option value="Silk">Unlike Product</option>
                     <option value="Silk">Other</option>
                 </select>
                </InputGroup>
                <label>Enter Your Reason</label>
                <InputGroup>
                <Form.Control aria-label="Text input with checkbox" placeholder='Enter your Comments for Cancel' />
                </InputGroup>  
                 <button className='cancel-btn'><i className='bi bi-x-square px-2'></i>Cancel Order</button>
                 </div>
            </li>
        </ul>
    </div>
    );
}
export default Cancel;