import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../AppCard/AppCard';
import Navbar from '../../components/Header/Navbar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Apps = () => {
    const { apps, loading } = useApps()

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);



 
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;

   if(apps.length===0 && !loading){
       return <p className='text-center text-2xl font-bold my-20'>No App Found</p>
   }
   if(searchedApps.length===0 && !loading){
       return <div>
        <p className='text-center text-2xl font-bold my-10'>No App Found for "{search}"</p>
        <button onClick={()=>setSearch('')} className='btn mx-auto block rounded-lg text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:scale-110'>Search Again</button>
        

       </div>
   }
  
   

    return (

       
        <div className='my-12 bg-base-100 '>
            <div className='text-center items-center'>
                <h1 className='font-bold text-3xl'>Our All Applications</h1>
                <p className='text-gray-700'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

             

            <div className='flex justify-between mt-12 items-center'>
                <h1 className='underline font-bold text-xl'>({searchedApps.length}) Apps Found</h1>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={search}
                            onChange={e => { setIsLoading(true); setSearch(e.target.value);
                                setTimeout(() => {
                                    setIsLoading(false);
                                }, 1000);
                             }}
                            type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className=' my-8 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                {
                    isLoading || loading ? (<div className='col-span-full flex items-center justify-center'><LoadingSpinner /></div>) : (
                        searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    )
                }
            </div>



        </div>
    );
};

export default Apps;