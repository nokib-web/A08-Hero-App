import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
           <div className='max-w-screen-2xl mx-auto w-full flex-1 px-4 md:px-8 lg:px-12 '>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;