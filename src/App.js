import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/LayOut/Layout';
import Home from './Components/Home/Home';
import Login from './Components/logIn/Login';
import Cart from './Components/Cart/Cart';
import Signup from './Components/SignUp/Signup';
import Notfound from './Components/NotFound/Notfound';
import Shop from './Components/Shop/Shop';
import Payment from './Components/Payment/Payment';
import { Toaster } from 'react-hot-toast';

function App() {

  let routers = createHashRouter([
    {path:"/" ,element:<Layout/>,
    children:[
      {path:"" ,  element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"login",element:<Login/>},
      {path:"cart",element:<Cart/>},
      {path:"signup",element:<Signup/>},
      {path:"shop",element:<Shop/>},
      {path:"payment",element:<Payment/>},
      {path:"*",element:<Notfound/>},
    ]
  }
  ])

  return <>
  <Toaster></Toaster>
  <RouterProvider router={routers}></RouterProvider>
  </>;
}

export default App;
