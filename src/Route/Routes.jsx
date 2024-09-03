import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
// import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dshboard/Dashboard";
import AddItems from "../Pages/Dashboard/Dshboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/Dshboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/Dshboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Dshboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Dshboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/Dshboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/Dshboard/AdminHome/AdminHome";
import Contact from "../Pages/Contact/Contact";
// import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
// import SignUp from "../Pages/SignUp/SignUp";

  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,


      children: [
    
        {
         
            path: "/",
            element: <Home></Home>

        },
        {
            path: "/menu",
            element:  <Menu></Menu> 
          
          },
        {
            path: "/order/:category",
            element: <Order></Order>
          
          },
        {
            path: "/login",
            element: <Login></Login>
          
          },
        {
            path: "/signup",
            element: <SignUp></SignUp>
          
          },
          {
            path:'/contact',
            element: <Contact></Contact>
          }




      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children: [

        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
       
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'manageItems',
          element: <PrivateRoute> <ManageItems></ManageItems> </PrivateRoute>
        },
        {
          path: 'updateItem',
          element: <PrivateRoute> <UpdateItem></UpdateItem> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
          // admin routes
          {
            path: 'addItems',
            element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
          },
         
          {
            path: 'users',
            element: <AllUsers></AllUsers>
          },
          {
            path: 'adminHome',
            element: <AdminHome></AdminHome>
          }
      ]
    }
  ]);