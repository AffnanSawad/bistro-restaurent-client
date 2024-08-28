import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Testimonials from '../../Home/Testimonials/Testimonials';

const Menu = () => {
    return (
        <div >
            <Helmet>
        <title>Bistro | Menu</title>
        
      </Helmet>

      <Cover   
      
      img={menuImg}

      title={'Our Menu'}
      
      ></Cover>


      <PopularMenu></PopularMenu>


      <Cover  
      
      img={menuImg2}

      title={'Burgers'}
      
      ></Cover>

      <Testimonials></Testimonials>
       
       
       
        </div>
    );
};

export default Menu;