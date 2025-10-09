import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import Chart from '../Chart/Chart';
import { toast } from 'react-toastify';



const AppDetails = () => {
    const [isInstalled, setIsInstalled] = useState(false);




    const { id } = useParams()
    const { apps, loading } = useApps();
    // console.log(apps)

    const app = apps.find(p => String(p.id) === id)

    if (loading) return <p>Loading....</p>


    const { title, image, description, downloads, companyName, ratings, ratingAvg, reviews, size   } = app || {};



    const handleInstall = () => {
        setIsInstalled(true);
      const installedApp = JSON.parse(localStorage.getItem('installedApp')) || [];
        let updatedInstalledApp = [];
        if (installedApp){
            const isDuplicate = installedApp.some(p => p.id === app.id);
            if (isDuplicate) {
                toast.error('App Already Installed');
                return;
            }
            updatedInstalledApp = [...installedApp, app];
        }
        else{
            updatedInstalledApp = [app];
        }       
        localStorage.setItem('installedApp', JSON.stringify(updatedInstalledApp));
        toast.success('App Installed Successfully')
    }


    return (
        <div>

            <div className='md:flex md:justify-start gap-8 py-10 border-b border-gray-300 '>
                <div className=' '>   
                    <img className=' rounded-lg h-60' src={image} alt="" />
                </div>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='border-b-1 text-gray-500 py-2'>Dveloped By: <span className='  text-[#632EE3]'>{companyName}</span></p>


                    <div className='flex justify-start items-center gap-10 pt-4 '>
                        <div>
                            <img src={downloadIcon} alt="" />
                            <p><small>Downloads</small></p>
                            <p>{downloads}</p>
                        </div>
                        <div>
                            <img src={ratingsIcon} alt="" />
                            <p><small>Ratings</small></p>
                            <p>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="" />
                            <p><small>Review</small></p>
                            <p>{reviews}</p>
                        </div>
                    </div>

                    <button onClick={() => handleInstall(app.id)} className='btn bg-[#00D390] mt-4' disabled={isInstalled}>{isInstalled ? "Installed" : `Install Now ${size}`}  </button>

                </div>


                


            </div>

              <div className=''>
                    <h2 className='text-2xl font-bold ml-6 my-6'>Ratings</h2>
                    <Chart ratings={ratings}></Chart>
                </div>

                <p className=' text-gray-500 my-12'> <span className=' font-bold'>Description:</span> <br />
                    {description}</p>



        </div>
    );
};

export default AppDetails;