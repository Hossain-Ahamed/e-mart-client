import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import useCart from "./useCart";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useAddToCart = () => {

    const {user} = useContext(AuthContext);
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

    const handleAddToCart = featuredProduct => {
        console.log(featuredProduct);
        if(user && user.email){
          const cartProduct = {productId: featuredProduct._id, name: featuredProduct.name, img: featuredProduct.img, price: featuredProduct.price, email: user.email}
          console.log(cartProduct);
          fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product added on the Cart.',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
        else{
          Swal.fire({
            title: 'Please login to order the product',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
        }
      }

      return handleAddToCart;
    
};

export default useAddToCart;