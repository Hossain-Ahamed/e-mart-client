import React from 'react';
import Banner from './Banner';
import ShowMenCategories from '../MenCategories/ShowMenCategories';
import SecondBanner from './SecondBanner';
import HotDeals from './HotDeals';
import BestSellers from './BestSellers';
import ThirdBanner from './ThirdBanner';
import NewProduct from './NewProduct';

const HomeForMen = () => {
    return (
        <>
        <div className='bg-white'>
        <Banner></Banner>
        </div>
        <div className='bg-zinc-100'>
        <ShowMenCategories></ShowMenCategories>
        </div>
        <div className='bg-white'>
        <SecondBanner></SecondBanner>
        <HotDeals></HotDeals>
        </div>
        <div className='bg-zinc-100'>
            <BestSellers></BestSellers>
        </div>
        <div className='bg-white'>
            <ThirdBanner></ThirdBanner>
            <NewProduct></NewProduct>
        </div>
        </>
    );
};

export default HomeForMen;