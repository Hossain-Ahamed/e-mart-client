import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import HomeForBeauty from "../../Pages/Beauty&Glamour/HomeForBeauty";
import PagesForCategory from "../../Pages/PagesForCategory/PagesForCategory";
import HomeForMen from "../../Pages/Men'sFashion/HomeForMen/HomeForMen";
import HomeForWomen from "../../Pages/Women'sFashion/HomeForWomen/HomeForWomen";
import HomeForGrocery from "../../Pages/Grocery/HomeForGrocery/HomeForGrocery";
import HomeForKitchenTools from "../../Pages/KitchenTools/Home/HomeForKitchenTools";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import MyCart from "../../Pages/Dashboard/Dashboard/MyCart";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Dashboard from "../../Layout/Dashboard";
import ProductOverView from "../../Pages/OverView/ProductOverView";
import AllUsers from "../../Pages/Dashboard/Dashboard/AdminDashboard/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../../Pages/Dashboard/Dashboard/AdminDashboard/AddProduct";
import HomePageLayout from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/HomePageLayout";
import UpdateTopBanner from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateTopBanner";
import {loader as updateTopBannerLoader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateTopBanner";
import UpdateSecondBanner from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateSecondBanner";
import {loader as updateSecondBannerLoader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateSecondBanner";
import UpdateBottomBanner from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateBottomBanner";
import {loader as updateBottomBannerLoader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateBottomBanner";
import ManageProduct from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/ManageProduct";
import UserHome from "../../Pages/Dashboard/Dashboard/UserDashboard/UserHome";
import AdminHome from "../../Pages/Dashboard/Dashboard/AdminDashboard/AdminHome/AdminHome";
import UpdateBottomSecondBanner from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UpdateBottomSecondBanner";
import AllCategories from "../../Pages/Dashboard/Dashboard/AdminDashboard/AllCategories";
import Error from "../../Pages/Shared/error/Error";
import SelectLayout from "../SelectLayout/SelectLayout";
import TopRightBannerLayout2 from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/SecondLayout/TopRightBannerLayout2";
import {loader as topRightBannerLayout2Loader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/SecondLayout/TopRightBannerLayout2";
import TopLeftBannerLayout2 from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/SecondLayout/TopLeftBannerLayout2";
import {loader as topLeftBannerLayout2Loader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/SecondLayout/TopLeftBannerLayout2";
import UploadSlimBanner from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UploadSlimBanner";
import {loader as slimBannerLoader} from "../../Pages/Dashboard/Dashboard/AdminDashboard/UploadCategory/UploadSlimBanner";
import SelectType from "../../Pages/SelectType/SelectType";
import AddReview from "../../Pages/Dashboard/Dashboard/AdminDashboard/AddReview";
import CheckOut from "../../Pages/Dashboard/Dashboard/CheckOut";
import UserProfile from "../../Pages/Dashboard/Dashboard/AdminDashboard/UserDashboard/UserProfile";
import EditUserProfile from "../../Pages/Dashboard/Dashboard/AdminDashboard/UserDashboard/EditUserProfile";
import AddCoupon from "../../Pages/Dashboard/Dashboard/AdminDashboard/CouponCode/AddCoupon";
import DeliveryCharge from "../../Pages/Dashboard/Dashboard/AdminDashboard/DeliveryCharge/DeliveryCharge";
import Coupon from "../../Pages/Dashboard/Dashboard/AdminDashboard/CouponCode/Coupon";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import CheckoutForm from "../../Pages/Dashboard/Dashboard/Payment/CheckoutForm";
import PaymentHistory from "../../Pages/Dashboard/Dashboard/Payment/PaymentHistory";
import PaymentMethods from "../../Pages/Dashboard/Dashboard/Payment/PaymentMethods";
import OrderDetails from "../../Pages/Dashboard/Dashboard/AdminDashboard/UserDashboard/OrderDetails/OrderDetails";
import WishList from "../../Pages/Dashboard/Dashboard/AdminDashboard/UserDashboard/WishList";
import OrderedProducts from "../../Pages/Dashboard/Dashboard/AdminDashboard/OrderedProducts/OrderedProducts";



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
          path: "/overview/:id",
          element: <ProductOverView></ProductOverView>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: "/allproducts",
          element: <AllProducts></AllProducts>
        },
        {
          path: "/categoryPages/:id",
          element: <PagesForCategory></PagesForCategory>
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
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: "user-home",
          element: <UserHome></UserHome>
        },
        {
          path: "edit-user-profile",
          element: <EditUserProfile />
        },
        {
          path: "user-profile",
          element: <UserProfile />
        },
        {
          path: "myCart",
          element: <MyCart></MyCart>
        },
        {
          path: "wish-list",
          element: <WishList />
        },
        {
          path: "check-out",
          element: <CheckOut />
        },
        {
          path: "payment-methods/:_OrderID",
          element: <PaymentMethods />
        },
        {
          path: "payment/:_OrderID",
          element: <Payment />
        },
        {
          path: "payment-history",
          element: <PaymentHistory />
        },
        {
          path: "check-out-form",
          element: <CheckoutForm />
        },
        {
          path: "order-details",
          element: <OrderDetails />
        },
        {
          path: "add-review",
          element: <AddReview />
        },
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "admin-home",
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'addProduct',
          element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
        },
        {
          path: 'manageProduct',
          element: <AdminRoute><ManageProduct></ManageProduct></AdminRoute>
        },
        {
          path: 'delivery-charge',
          element: <AdminRoute><DeliveryCharge /></AdminRoute>
        },
        {
          path: 'add-coupon',
          element: <AdminRoute><AddCoupon /></AdminRoute>
        },
        {
          path: 'manage-coupon',
          element: <AdminRoute><Coupon /></AdminRoute>
        },
        {
          path: 'ordered-products',
          element: <AdminRoute><OrderedProducts /></AdminRoute>
        },
        {
          path: 'all-categories',
          element: <AdminRoute><AllCategories></AllCategories></AdminRoute>
        },
        {
          path: 'upload/:type',
          element: <AdminRoute><SelectType /></AdminRoute>
        },
        {
          path: 'upload/:type/:slug/home-page-layout',
          element: <AdminRoute><HomePageLayout></HomePageLayout></AdminRoute>
        },
        {
          
          path: 'upload/:type/:slug/home-page-layout/:layout',
          
          element: <AdminRoute>
            
            <SelectLayout></SelectLayout>
          </AdminRoute>
        },
        
        {
          path: 'upload/:type/:slug/upload-top-banner',
          element: <AdminRoute><UpdateTopBanner></UpdateTopBanner></AdminRoute>,
          loader: updateTopBannerLoader ,
          errorElement: <Error /> 
        },
        {
          path: 'upload/:type/:slug/upload-second-banner',
          element: <AdminRoute><UpdateSecondBanner></UpdateSecondBanner></AdminRoute>,
          loader: updateSecondBannerLoader,
          errorElement: <Error></Error>
        },
        {
          path: 'upload/:type/:slug/upload-bottom-banner',
          element: <AdminRoute><UpdateBottomBanner></UpdateBottomBanner></AdminRoute>,
          loader: updateBottomBannerLoader,
          errorElement: <Error />
        },
        {
          path: 'upload/:type/:slug/upload-bottom-second-banner',
          element: <AdminRoute><UpdateBottomSecondBanner></UpdateBottomSecondBanner></AdminRoute>,
        },
        {
          path: 'upload/:type/:slug/upload-top-left-banner-layout2',
          element: <AdminRoute><TopLeftBannerLayout2 /></AdminRoute>,
          loader: topLeftBannerLayout2Loader,
          errorElement: <Error />
        },
        {
          path: 'upload/:type/:slug/upload-top-right-banner-layout2',
          element: <AdminRoute><TopRightBannerLayout2></TopRightBannerLayout2></AdminRoute>,
          loader: topRightBannerLayout2Loader,
          errorElement: <Error />
        },
        {
          path: 'upload/:type/:slug/upload-slim-banner',
          element: <AdminRoute><UploadSlimBanner /></AdminRoute>,
          loader: slimBannerLoader,
          errorElement: <Error />
        },
        
      ]
    }
  ]);

export default router;