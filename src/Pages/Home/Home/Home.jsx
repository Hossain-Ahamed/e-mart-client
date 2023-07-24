import React from 'react';
import Banner from '../Banner/Banner';
import Swip from '../Banner/Swip';
import ShowCategories from '../Categories/ShowCategories';
import ShowAllProducts from '../../AllProducts/ShowAllProducts';
import Login from '../../Login/Login';


const Home = () => {
    return (
        <>
        <div className=''>
        <Swip></Swip>
        <Login></Login>
        <ShowCategories></ShowCategories>
        <ShowAllProducts></ShowAllProducts>
        </div>
        </>
    );
};

export default Home;