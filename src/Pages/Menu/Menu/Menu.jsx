import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg'
import menuImg3 from '../../../assets/menu/pizza-bg.jpg'
import menuImg4 from '../../../assets/menu/soup-bg.jpg'
import menuImg5 from '../../../assets/menu/salad-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Testimonials from '../../Home/Testimonials/Testimonials';
import UseMenu from '../../../Hooks/UseMenu';
import SecTitle from '../../../Components/SecTitle/SecTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
   
    const [menus] = UseMenu();
    
    
    const dessert = menus.filter(item => item.category === 'dessert')
    const salad = menus.filter(item => item.category === 'salad')
    const soup = menus.filter(item => item.category === 'soup')
    const pizza = menus.filter(item => item.category === 'pizza')
    const offered = menus.filter(item => item.category === 'offered')



    return (
        <div >
            <Helmet>
        <title>Bistro | Menu</title>
        
      </Helmet>

      <Cover   
      
      img={menuImg}

      title={'Our Menu'}
      
      ></Cover>

      <SecTitle
      
      subHeading={'Dont Miss'}
      heading={'Todays Offer'}
      
      ></SecTitle>

      <MenuCategory   items={offered}></MenuCategory>
    
    {/* dessert menu items */}
    <MenuCategory 
    
    items={dessert}

    title="Dessert"

    img={menuImg2}


    
    ></MenuCategory>


      {/* pizza menu items */}
      <MenuCategory
    
    items={pizza}

    title="pizza"

    img={menuImg3}


    
    ></MenuCategory>


     {/* soup menu items */}
     <MenuCategory
    
    items={soup}

    title="soup"

    img={menuImg4}


    
    ></MenuCategory>


     {/* salad menu items */}
     <MenuCategory
    
    items={salad}

    title="salad"

    img={menuImg5}


    
    ></MenuCategory>

      {/* <PopularMenu></PopularMenu>


      <Cover  
      
      img={menuImg2}

      title={'Burgers'}
      
      ></Cover>

      <Testimonials></Testimonials> */}
       
       
       
        </div>
    );
};

export default Menu;