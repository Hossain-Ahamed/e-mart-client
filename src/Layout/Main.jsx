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
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;