import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DownloadLogo from '../../assets/icon-downloads.png'
import RatingsLogo from '../../assets/icon-ratings.png'
import ReviewLogo from '../../assets/icon-review.png'
import { MdOutlinePhotoSizeSelectSmall } from 'react-icons/md';


const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sortByDownloads, setSortByDownloads] = useState("none");
    

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApp')) || [];
        if (apps) setInstalledApps(apps);
        
    }, []);

    const sortedApps = (
        () => {
        if (sortByDownloads === 'downloads-asc') {
            return [...installedApps].sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));
        } else if (sortByDownloads === 'downloads-desc') {
            return [...installedApps].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
        }
        return installedApps;
    })();



    const handleUninstall = (id) => {
        const installedApps = JSON.parse(localStorage.getItem('installedApp')) || [];
        let updatedApps = installedApps.filter(app => app.id !== id);
        // for ui update
        setInstalledApps(updatedApps);
        // for local storage update
        localStorage.setItem('installedApp', JSON.stringify(updatedApps));
        toast.success('App Uninstalled Successfully');
    }

    return (
        <div className='my-12 '>
            <div className='text-center items-center'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <p className='text-gray-700'>Explore All Apps on the Market developed by us.</p>
            </div>


            <div className='flex justify-between mt-12 items-center'>
                <h1 className='font-bold ml-4'>Your Installed Apps: {installedApps.length}</h1>
                <select
                    value={sortByDownloads}
                    onChange={e => setSortByDownloads(e.target.value)}
                    className="select w-1/3 md:w-50 max-w-xs">
                    <option value="none">Sort By Downloads</option>
                    <option value="downloads-asc">Low-&gt;High</option>
                    <option value="downloads-desc">High-&gt;Low</option>
                </select>

                
                
            </div>

            <div>

                <div >

                    {sortedApps.map(app => (
                        <div key={app.id} className=' flex justify-between bg-base-200 p-4 gap-4 my-4 shadow-2xl  items-center'>
                            <div className=' flex gap-4  items-center'>
                                <div className=''>
                                    <img className=' rounded-xl w-20 h-20 ' src={app.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='font-bold'>{app.title}</h2>
                                    <div className='flex gap-4'>
                                        <p className='flex items-center gap-1'><img className='w-4 h-4' src={DownloadLogo} alt="" />{app.downloads}</p>
                                        <p className='flex items-center gap-1'><img className='w-4 h-4' src={RatingsLogo} alt="" />{app.ratingAvg}</p>
                                        <p> {app.size}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => handleUninstall(app.id)} className='btn btn-danger hover:bg-green-500 hover:scale-105'>Uninstall</button>
                            </div>
                            
                            
                        </div>
                    ))}
                </div>
                <div>
                    {installedApps.length === 0 && (
                        <p  className='text-center text-2xl font-bold  mt-20'>No App Installed Yet</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Installation;