import React from 'react';
import Banner from './Banner';
import ShowMenCategories from '../MenCategories/ShowMenCategories';
import MenSecondBanner from './MenSecondBanner';
import TrendingProducts from './TrendingProducts';
import MenThirdBanner from './MenThirdBanner';
import { Helmet } from 'react-helmet-async';
import AllProducts from './AllProducts';
import BackToTopButton from '../../../Component/BackToTopButton';

const HomeForMen = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Men'sFashion</title>
        </Helmet>
        <div className='bg-white'>
        <Banner></Banner>
        </div>
        <div className='bg-zinc-100'>
        <ShowMenCategories></ShowMenCategories>
        </div>
        <div className='bg-white'>
        <MenSecondBanner></MenSecondBanner>
        <TrendingProducts />
            {/* <MenThirdBanner></MenThirdBanner> */}
            <AllProducts />
        </div>
        <BackToTopButton />
        </>
    );
};

export default HomeForMen;