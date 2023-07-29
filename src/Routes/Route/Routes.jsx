import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import HomeForBeauty from "../../Pages/Beauty&Glamour/HomeForBeauty";
import PagesForCategory from "../../Pages/PagesForCategory/PagesForCategory";
import ShowMensFashion from "../../Pages/Men'sFashion/ShowMensFashion";
import HomeForMen from "../../Pages/Men'sFashion/HomeForMen/HomeForMen";
import HomeForWomen from "../../Pages/Women'sFashion/HomeForWomen/HomeForWomen";
import HomeForGrocery from "../../Pages/Grocery/HomeForGrocery/HomeForGrocery";
import HomeForKitchenTools from "../../Pages/KitchenTools/Home/HomeForKitchenTools";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import MyCart from "../../Pages/Dashboard/Dashboard/MyCart";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Dashboard from "../../Layout/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/pages/:id",
          element: <PagesForCategory></PagesForCategory>
        },
        {
          path: "/allproducts",
          element: <AllProducts></AllProducts>
        },
        {
          path: "/mensFashion",
          element: <HomeForMen></HomeForMen>
        },
        {
          path: "/womensFashion",
          element: <HomeForWomen></HomeForWomen>
        },
        {
          path: "/grocery",
          element: <HomeForGrocery></HomeForGrocery>
        },
        {
          path: "/beauty&glamour",
          element: <HomeForBeauty></HomeForBeauty>
        },
        {
          path: "/kitchenTools",
          element: <HomeForKitchenTools></HomeForKitchenTools>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "myCart",
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);

export default router;