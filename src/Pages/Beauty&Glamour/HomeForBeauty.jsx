import React from 'react';
import BeautyBanner from './BeautyBanner';
import BeautyFeaturedProducts from './BeautyFeaturedProducts';
import BeautySecondBanner from './BeautySecondBanner';
import BeautyCategory from './BeautyCategory';
import BeautyBestSellers from './BeautyBestSellers';
import BeautyThirdBanner from './BeautyThirdBanner';
import BeautyNewProducts from './BeautyNewProducts';
import { Helmet } from 'react-helmet-async';

const HomeForBeauty = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Beauty&Glamour</title>
        </Helmet>
        <div className='bg-white'>
        <BeautyBanner />
        <BeautyFeaturedProducts />
        <BeautySecondBanner />
        <BeautyCategory />
        <div className='bg-gray-100'>
            <BeautyBestSellers />
        </div>
        <BeautyThirdBanner />
        <BeautyNewProducts />
        </div>
        </>
    );
};

export default HomeForBeauty;