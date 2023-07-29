import React from 'react';
import GroceryBanner from './GroceryBanner';
import GroceryCategory from './GroceryCategory';
import GrocerySecondBanner from './GrocerySecondBanner';
import GroceryTrendingProducts from './GroceryTrendingProducts';
import GroceryThirdBanner from './GroceryThirdBanner';
import { Helmet } from 'react-helmet-async';
import GroceryAllProducts from './GroceryAllProducts';

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
            <GroceryTrendingProducts />
            <GroceryThirdBanner></GroceryThirdBanner> 
            <GroceryAllProducts></GroceryAllProducts>
        </div>
        </>
    );
};

export default HomeForGrocery;