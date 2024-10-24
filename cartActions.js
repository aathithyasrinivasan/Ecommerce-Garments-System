import axios from "axios";
import { cartRequest, cartSuccess } from "../slice/cartSlice";
import { toast } from "react-toastify";

export const addCart = (id, quantity) => async (dispatch) => {
  try {
    dispatch(cartRequest()); // Corrected line
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch(
      cartSuccess({
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
