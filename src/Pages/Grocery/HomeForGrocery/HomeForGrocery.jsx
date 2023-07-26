import React from 'react';
import GroceryBanner from './GroceryBanner';
import GroceryCategory from './GroceryCategory';
import GrocerySecondBanner from './GrocerySecondBanner';
import GroceryFeaturedProducts from './GroceryFeaturedProducts';
import GroceryThirdBanner from './GroceryThirdBanner';
import GroceryNewProducts from './GroceryNewProducts';
import GroceryBestSellers from './GroceryBestSellers';
import { Helmet } from 'react-helmet-async';

const HomeForGrocery = () => {
    return (
        <>
        <Helmet>
            <title>E-Mart | Grocery</title>
        </Helmet>
        <div className='bg-white'>
            <GroceryBanner></GroceryBanner>
            <GroceryCategory></GroceryCategory>
            <GrocerySecondBanner></GrocerySecondBanner>
            <GroceryFeaturedProducts></GroceryFeaturedProducts>
            <div className='bg-gray-100'>
            <GroceryBestSellers></GroceryBestSellers>
            </div>
            <GroceryThirdBanner></GroceryThirdBanner>
            <GroceryNewProducts></GroceryNewProducts>
            
        </div>
        </>
    );
};

export default HomeForGrocery;