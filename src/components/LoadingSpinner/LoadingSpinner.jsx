import React from 'react';
import Logo from '../../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="">
             
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className='flex items-center text-5xl font-bold'>L <span><img className='h-15 w-15 animate-spin transition-transform duration-100000' src={Logo} alt="" /></span>oading</h1>
                  
                </div>
            </div>

        </div>
    );
};

export default LoadingSpinner;