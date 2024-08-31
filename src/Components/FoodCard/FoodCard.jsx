// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item}) => {

  
    const {name , image , price , recipe, _id} = item;
    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart= food =>{

  if(user && user.email){
    
     //send cart item to the database
     const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      image,
      price
  }

  axiosSecure.post('/carts', cartItem)
  .then(res => {
      console.log(res.data)
      if (res.data.insertedId) {
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
          });
          // refetch cart to update the cart items count
          refetch();
      }

  })





  }
  else{
    Swal.fire({
      title: "You are not Logged In",
      text: "Please login to add to the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
  }).then((result) => {
      if (result.isConfirmed) {
          //   send the user to the login page
          navigate('/login', { state: { from: location } })
      }
  });
  }

    }

    


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    
  

    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex flex-col items-center font-semibold">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>
    <p>Price : ${price} </p>
   
    <div className="card-actions ">
      <button
      
      onClick={handleAddToCart}
      
      className="btn  btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;