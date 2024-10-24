import Offer from '../images/Offer_icon.jpg'
import Request from '../images/Requests.jpg'
import Seller from '../images/Seller.png'
import Stack from '../images/Stack.jpg'

function Admin(){
    return(
        <div className="home_panel">
                <div className="admin-panel">
                   <ul className='admin-outer-panel'>
                    <li>
                        <img src={Offer} alt='offer'/>
                        <p>Edit Offers</p>
                    </li>
                    <li>
                        <img src={Request} alt='offer'/>
                        <p>Handle Request</p>
                    </li>
                    <li>
                        <img src={Seller} alt='offer'/>
                        <p>Sellers</p>
                    </li>
                    <li>
                        <img src={Stack} alt='offer'/>
                        <p>Stack</p>
                    </li>
                   </ul>    
                </div>     
        </div>
    );
}
export default Admin;