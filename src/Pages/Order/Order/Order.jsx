import { useState } from 'react';
import orderPic from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
      
    const categories = ['salad','pizza', 'soup', 'dessert' ];
 
    const {category} = useParams();

    const intialIndex = categories.indexOf(category);

    const [tabindex,setTabindex] = useState(intialIndex);

     
    const [menus] = UseMenu();

   
    // console.log(category);
    
    
    const dessert = menus.filter(item => item.category === 'dessert')
    const salad = menus.filter(item => item.category === 'salad')
    const soup = menus.filter(item => item.category === 'soup')
    const pizza = menus.filter(item => item.category === 'pizza')
    const offered = menus.filter(item => item.category === 'offered')


    return (
        <div>

<Helmet>
        <title>Bistro | Order Food</title>
        
      </Helmet>
            <Cover
            
            img={orderPic}
            title={'Order Now!'}
            
            ></Cover>


<Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
  </TabList>
  <TabPanel>
   
  <OrderTab
  
  items={salad}

  ></OrderTab>



  </TabPanel>
  <TabPanel>
  <OrderTab
  
  items={pizza}
  
  ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
  
  items={soup}
  
  ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
  
  items={dessert}
  
  ></OrderTab>
  </TabPanel>
</Tabs>




        </div>
    );
};

export default Order;