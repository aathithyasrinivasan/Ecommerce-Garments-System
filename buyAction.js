import axios from "axios";
import { buyRequest, buySuccess } from "../slice/buySlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const addBuy = (id, quantity) => async (dispatch) => {
   
  try {
    dispatch(buyRequest()); // Corrected line
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch(
      buySuccess({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].image,
        stock: data.product.stock,
        quantity,
       
      })
      
    ); 
   
  } catch (err) {
    // Handle error if needed
   toast.error(err)
  }
};
