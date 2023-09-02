import React from 'react';
import BeautyBanner from './BeautyBanner';
import BeautyTrendingProducts from './BeautyTrendingProducts';
import BeautySecondBanner from './BeautySecondBanner';
import BeautyCategory from './BeautyCategory';
import BeautyThirdBanner from './BeautyThirdBanner';
import BeautyAllProducts from './BeautyAllProducts';
import { Helmet } from 'react-helmet-async';
import BackToTopButton from '../../Component/BackToTopButton';

const HomeForBeauty = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Beauty&Glamour</title>
        </Helmet>
        <div className='bg-white'>
        <BeautyBanner />
        <BeautyCategory />
        <BeautySecondBanner />
        <BeautyTrendingProducts />
        <BeautyThirdBanner />
        <BeautyAllProducts />
        </div>
        <BackToTopButton />
        </>
    );
};

export default HomeForBeauty;