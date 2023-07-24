import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import SubNav from '../Pages/Shared/Navbar/SubNav';

const Main = () => {
    return (
        <>
        <SubNav></SubNav>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
        </>
    );
};

export default Main;