import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import SubNav from '../Pages/Shared/Navbar/SubNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noNavFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    const noFooter = location.pathname === "/";
    //console.log(import.meta.env.VITE_TEST)
    return (
        <>
        { noNavFooter || <SubNav />}
        { noNavFooter || <Navbar />}
        <div className='max-w-[1500px] mx-auto'>
       <Outlet />
       </div>
       { noNavFooter || noFooter || <Footer />}
        </>
    );
};

export default Main;