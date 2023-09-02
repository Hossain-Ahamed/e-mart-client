import React from 'react';
import WomenBanner from './WomenBanner';
import WomenCategory from './WomenCategory';
import TrendingProducts from './TrendingProducts';
import WomenSecondBanner from './WomenSecondBanner';
import { Helmet } from 'react-helmet-async';
import WomenThirdBanner from './WomenThirdBanner';
import WomenAllProducts from './WomenAllProducts';
import BackToTopButton from '../../../Component/BackToTopButton';

const HomeForWomen = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Women'sFashion</title>
        </Helmet>
        <WomenBanner></WomenBanner>
        <WomenCategory></WomenCategory>
        <WomenSecondBanner></WomenSecondBanner>
        <TrendingProducts></TrendingProducts>
        <WomenThirdBanner></WomenThirdBanner>
        <WomenAllProducts></WomenAllProducts>
        <BackToTopButton />
        </>
    );
};

export default HomeForWomen;