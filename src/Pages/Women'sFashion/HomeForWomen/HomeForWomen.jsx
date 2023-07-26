import React from 'react';
import WomenBanner from './WomenBanner';
import WomenCategory from './WomenCategory';
import TrendingProdutcs from './TrendingProdutcs';
import WomenSecondBanner from './WomenSecondBanner';
import { Helmet } from 'react-helmet-async';

const HomeForWomen = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Women'sFashion</title>
        </Helmet>
        <WomenBanner></WomenBanner>
        <WomenCategory></WomenCategory>
        <WomenSecondBanner></WomenSecondBanner>
        <TrendingProdutcs></TrendingProdutcs>
        </>
    );
};

export default HomeForWomen;