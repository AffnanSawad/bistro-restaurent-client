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