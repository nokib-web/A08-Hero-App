import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === "loading") {
            setIsLoading(true);
        } else {
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, []);



    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>

            {isLoading && <LoadingSpinner className='absolute inset-0 flex items-center justify-center z-70'></LoadingSpinner>}

            <div className='max-w-screen-2xl mx-auto w-full flex-1 px-4 md:px-8 lg:px-12 '>

                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;