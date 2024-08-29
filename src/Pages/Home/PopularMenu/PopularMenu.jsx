import { useEffect, useState } from "react";
import SecTitle from "../../../Components/SecTitle/SecTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {

    const [menus] = UseMenu();
    const popular = menus.filter(item => item.category === 'popular')


//   useEffect( 
//     ()=>{
//     fetch('menu.json')
//     .then(res=> res.json())
//     .then(data => {
       
//         const popularItems = data.filter(item => item.category === 'popular')
       
//         setmenu(popularItems);
   
//     })
// }
//     ,[])


    return (
        <section className="mb-10">

            <SecTitle
            
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            
            ></SecTitle>


            {/* mapping */}
            <div className="grid md:grid-cols-2 gap-10 my-4">

        {
            popular.map(item => <MenuItem
            
                key={item._id}
                item={item}
            
            ></MenuItem> )
        }

            </div>

            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            
        </section>
    );
};

export default PopularMenu;