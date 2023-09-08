import React from 'react';
import Banner from '../Banner/Banner';
import Swip from '../Banner/Swip';
import ShowCategories from '../Categories/ShowCategories';
import ShowAllProducts from '../../AllProducts/ShowAllProducts';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';
import { Helmet } from 'react-helmet-async';
import HomeSecondBanner from '../HomeSecondBanner';
import HomeTrendingProducts from '../HomeTrendingProducts';
import HomeThirdBanner from '../HomeThirdBanner';
import BackToTopButton from '../../../Component/BackToTopButton';
import { Toaster } from 'react-hot-toast';


const Home = () => {
    return (
        <>
        
            <div className=''>
                <Helmet>
                    <title>E-Mart | Home</title>
                </Helmet>
                <Swip></Swip>
                <ShowCategories></ShowCategories>
                <HomeSecondBanner></HomeSecondBanner>
                <HomeTrendingProducts></HomeTrendingProducts>
                <HomeThirdBanner></HomeThirdBanner>
                <ShowAllProducts></ShowAllProducts>
                <BackToTopButton />
            </div>
        </>
    );
};

export default Home;