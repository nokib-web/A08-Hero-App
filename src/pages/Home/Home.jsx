import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrandingsApp from '../TrandingsApp/TrandingsApp';
import useApps from '../../Hooks/useApps';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


const Home = () => {

 const {apps, loading}= useApps()
 const trandingsApps = apps.slice(0,8)

    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <TrandingsApp></TrandingsApp>

           

           <div className=' my-8 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            
            
            {
                loading ?(<div className='col-span-full flex items-center justify-center'><LoadingSpinner /></div>) :(

                trandingsApps.map(app=>(<AppCard key={app.id} app={app}></AppCard>)))
            }
           </div>

           <div className='flex justify-center items-center py-6'>
            <Link to='/apps'><button className='btn mx-auto items-center  rounded-lg text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:scale-110'>Show All</button></Link>

           </div>
        </div>
    );
};

export default Home;