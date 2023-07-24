import React from 'react';
import WomenBanner from './WomenBanner';
import WomenCategory from './WomenCategory';
import TrendingProdutcs from './TrendingProdutcs';
import WomenSecondBanner from './WomenSecondBanner';

const HomeForWomen = () => {
    return (
        <>
        <WomenBanner></WomenBanner>
        <WomenCategory></WomenCategory>
        <WomenSecondBanner></WomenSecondBanner>
        <TrendingProdutcs></TrendingProdutcs>
        </>
    );
};

export default HomeForWomen;