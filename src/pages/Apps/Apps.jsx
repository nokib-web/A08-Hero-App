import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../AppCard/AppCard';
import Navbar from '../../components/Header/Navbar';

const Apps = () => {
    const { apps } = useApps()

    const [search, setSearch] = useState('');
    // console.log(search)
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    // console.log(searchedApps)

    if (apps.length === 0) return <p>Loading....</p>
    

    if (searchedApps.length === 0) return(
        <div className='text-center mt-20'>
            <h1 className='font-bold text-3xl'>No App Found</h1>
            <p className='text-gray-700'>We could not find any app matching your search.</p>
            <button onClick={() => setSearch('')} className='btn my-2 rounded-lg text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]'>Go Back!</button>
        </div>  
    )


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
                            onChange={e => setSearch(e.target.value)}
                            type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className=' my-8 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                {
                    searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>



        </div>
    );
};

export default Apps;