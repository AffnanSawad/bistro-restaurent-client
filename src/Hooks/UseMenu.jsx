import { useEffect, useState } from "react";


const UseMenu = () => {
   
    const [menus,setmenu] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect( 
      ()=>{
      fetch('http://localhost:5000/menu')
      .then(res=> res.json())
      .then(data => {
         
        //   const popularItems = data.filter(item => item.category === 'popular')
         
          setmenu(data);
          setLoading(false);
     
      })
  }
      ,[])

      return [menus, loading];

};

export default UseMenu;