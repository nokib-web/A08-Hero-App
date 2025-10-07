import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import HeroImg from '../../assets/hero.png'

const Banner = () => {

    const handlePlayStore = () => {
        window.open("https://play.google.com/", "_blank");
    }
    const handleAppStore = () => {
        window.open("https://www.apple.com/app-store/", "_blank");
    }

    return (
        <div >
            <div className=" bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-screen-2xl w-full mx-auto pt-12 ">
                        <h1 className="text-5xl font-bold">We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>

                        <p className="py-6">
                           At <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex items-center justify-center gap-4'>
                            <button onClick={handlePlayStore} className="btn bg-blue-100 border-0 rounded-lg hover:scale-105 btn-outline"> <IoLogoGooglePlaystore className='text-blue-700 red-500' /> Google Play</button>
                            <button onClick={handleAppStore} className="btn bg-blue-100 rounded-lg border-0 hover:scale-105 btn-outline"> <FaAppStoreIos className='text-blue-700' /> App Store</button>
                        </div>

                        <div className='py-8'>
                            <div className='max-w-md mx-auto '>
                                <img src={HeroImg} alt="" />

                            </div>
                            <div className=' text-white py-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] max-w-screen-2xl w-full mx-auto rounded-lg'>
                                <h1 className='text-3xl font-bold '>Trusted by Millions, Built for You</h1>


                                <div className='md:flex w-full mx-auto justify-center gap-12'>
                                    <div className='my-4'>
                                        <p className='font-extralight text-gray-300'><small>Total Downloads</small></p>
                                        <h1 className='text-4xl font-bold'>29.6M</h1>
                                        <p className='font-extralight text-gray-300'><small>21% more than last month</small></p>
                                    </div>
                                    <div className='my-4'>
                                        <p className='font-extralight text-gray-300'><small>Total Review</small></p>
                                        <h1 className='text-4xl font-bold'>906K</h1>
                                        <p className='font-extralight text-gray-300'><small>46% more than last month</small></p>
                                    </div>
                                    <div className='my-4'>
                                        <p className='font-extralight text-gray-300'><small>Active Apps</small></p>
                                        <h1 className='text-4xl font-bold'>132+</h1>
                                        <p className='font-extralight text-gray-300'><small>31 More Will Launch</small></p>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;