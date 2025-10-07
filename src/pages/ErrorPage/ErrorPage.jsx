import React from 'react';
import ErrorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';

const ErrorPage = () => {
    
    return (

        <div>

            <div className='min-h-screen flex flex-col'>
                <Navbar></Navbar>

                <div >
                    <img className='items-center justify-center mx-auto my-4' src={ErrorImg} alt="Error" />
                </div>
                <div className='my-4 '>
                    <div className='text-center items-center'>
                        <h1 className='font-bold text-3xl'>Oops, page not found!</h1>
                        <p className='text-gray-700'>The page you are looking for is not available.</p>
                        <Link to='/'><button className='btn my-2 rounded-lg text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:scale-110'>Go Back!</button></Link>
                    </div>
                </div>


                <Footer></Footer>
            </div>


        </div>
    );
};

export default ErrorPage;