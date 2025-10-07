import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrandingsApp from '../TrandingsApp/TrandingsApp';


const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <TrandingsApp></TrandingsApp>
           

        </div>
    );
};

export default Home;