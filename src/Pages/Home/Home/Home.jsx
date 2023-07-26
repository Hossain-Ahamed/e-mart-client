import React from 'react';
import Banner from '../Banner/Banner';
import Swip from '../Banner/Swip';
import ShowCategories from '../Categories/ShowCategories';
import ShowAllProducts from '../../AllProducts/ShowAllProducts';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
        <div className=''>
        <Helmet>
            <title>E-Mart | Home</title>
        </Helmet>
        <Swip></Swip>
        <ShowCategories></ShowCategories>
        <ShowAllProducts></ShowAllProducts>
        </div>
        </>
    );
};

export default Home;