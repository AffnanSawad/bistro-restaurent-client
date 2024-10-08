import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }

   
    const NavLinks = <>
       
       <li className="font-bold"> <Link to="/">Home</Link>   </li>
       <li className="font-bold"> <Link to="/contact">Contact</Link>   </li>
       <li className="font-bold"> <Link to="/menu">Our Menu</Link>   </li>
       <li className="font-bold"> <Link to="/order/salad">Order Food</Link>   </li>
       <li className="font-bold"> <Link to="/dashboard">
       
       <button className="btn">
       <FaShoppingCart className="mr-4" />
        <div className="badge badge-secondary">+{cart.length} </div>
        </button>
       
       
       
       </Link>   </li>
       {/* <li className="font-bold"> <Link to="/login">Log In</Link>   </li> */}
       {/* <li className="font-bold"> <Link to="/signup">Sign Up</Link>   </li> */}
       {/* <li className="font-bold"> <Link to="/secret">Secret</Link>   </li> */}
       

{
            // user ? <>
            //     {/* <span>{user?.displayName}</span> */}
            //     <button onClick={handleLogOut} className="btn btn-ghost mb-2 pb-3 font-bold">LogOut</button>
            // </> : <>
            //     <li><Link to="/login">Login</Link></li>
            //     <li className="font-bold"> <Link to="/signup">Sign Up</Link>   </li>

            // </>
        }
    
    </>



    return (
        <>
          <div className="navbar max-w-screen-xl mx-auto 
          
          fixed z-10 bg-opacity-60 bg-black text-white font-bold
          
          ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        

    {NavLinks}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Restaurent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         
          {NavLinks} 
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn  btn-error text-white">Get Started</a>*/}


    {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-error text-white font-bold">LogOut</button>
            </> : <>


             <Link to="/login">
                
                <button  className="btn mr-4 btn-primary text-white font-bold">Log In</button>
                
                </Link>   
                
                 <Link to="/signup">
                
                <button  className="btn btn-accent text-white font-bold ml-2">Sign Up</button>
                
                </Link>  

            </>
        }



  </div>
</div>  
        </>
    );
};

export default Navbar;