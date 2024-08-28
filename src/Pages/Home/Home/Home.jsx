import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           {/* <h1>This Is Home</h1>  */}
           <div>
            <Helmet>
        <title>Bistro | Home</title>
       
      </Helmet>
      </div>
           <Banner></Banner>
           <Category></Category>
           <Chef></Chef>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <CallUs></CallUs>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;