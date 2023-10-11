import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import SubNav from '../Pages/Shared/Navbar/SubNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    //console.log(import.meta.env.VITE_TEST)
    return (
        <>
        <SubNav></SubNav>
        <Navbar></Navbar>
        <div className='max-w-[1500px] mx-auto'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Main;