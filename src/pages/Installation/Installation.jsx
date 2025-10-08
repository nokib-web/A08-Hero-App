import React, { useEffect, useState } from 'react';


const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sortBySize, setSortBySize] = useState("none");
    

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApp')) || [];
        if (apps) setInstalledApps(apps);
        
    }, []);

    const sortedApps = (
        () => {
        if (sortBySize === 'size-asc') {
            return [...installedApps].sort((a, b) => a.size - b.size);
        } else if (sortBySize === 'size-desc') {
            return [...installedApps].sort((a, b) => b.size - a.size);
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
        alert('App Uninstalled Successfully');
    }

    return (
        <div className='my-12 '>
            <div className='text-center items-center'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <p className='text-gray-700'>Explore All Apps on the Market developed by us.</p>
            </div>


            <div className='flex justify-between mt-12 items-center'>
                <h1>Your Installed Apps: {installedApps.length}</h1>
                <select
                    value={sortBySize}
                    onChange={e => setSortBySize(e.target.value)}
                    className="select select-bordered w-1/2 max-w-xs">
                    <option value="none">Sort By Size</option>
                    <option value="size-asc">Low-&gt;High</option>
                    <option value="size-desc">High-&gt;Low</option>
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
                                        <p>{app.downloads}</p>
                                        <p>{app.ratingAvg}</p>
                                        <p>{app.size}MB</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={() => handleUninstall(app.id)} className='btn btn-danger'>Uninstall</button>
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