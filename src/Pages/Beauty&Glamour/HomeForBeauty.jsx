import React from 'react';
import BeautyBanner from './BeautyBanner';
import BeautyFeaturedProducts from './BeautyFeaturedProducts';
import BeautySecondBanner from './BeautySecondBanner';
import BeautyCategory from './BeautyCategory';
import BeautyBestSellers from './BeautyBestSellers';
import BeautyThirdBanner from './BeautyThirdBanner';
import BeautyNewProducts from './BeautyNewProducts';

const HomeForBeauty = () => {
    return (
        <>
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