import { Link } from "react-router-dom";
import SecTitle from "../../../Components/SecTitle/SecTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed font-bold text-white pt-8 my-20">
            
    <SecTitle
    
    
    subHeading={"Check It Out"}
    heading={"Featured Item"}

    >        
    </SecTitle>


    <div className="md:flex justify-center items-center pt-12 pb-20 px-36 bg-slate-600 bg-opacity-30">

    
    <div>
        <img src={featured} alt="" />
    </div>

    <div className="md:ml-10">
        <p> Aug 27 , 2024 </p>
        <p className=" uppercase">Where Can I Get Some</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laudantium.</p>
       <Link to='menu'>  <button className="btn  my-5 btn-accent">Order Now</button>   </Link>

    </div>


    </div>


        </div>
    );
};

export default Featured;