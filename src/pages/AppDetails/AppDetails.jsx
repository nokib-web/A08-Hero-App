import React from 'react';
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import Chart from '../Chart/Chart';



const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps();
    // console.log(apps)

    const app = apps.find(p => String(p.id) === id)

    if (loading) return <p>Loading....</p>


    const { title, image, description, downloads, companyName, ratings, ratingAvg, reviews, size   } = app || {};



    const handleInstall = () => {
        const installedApp = JSON.parse(localStorage.getItem('installedApp')) || [];
        // console.log(installedApp)
        let updatedInstalledApp = [];
        if (installedApp){
            const isDuplicate = installedApp.some(p => p.id === app.id);
            if (isDuplicate) {
                alert('App Already Installed');
                return;
            }
            updatedInstalledApp = [...installedApp, app];
        

        }
        else{
            updatedInstalledApp = [app];
        }       
        localStorage.setItem('installedApp', JSON.stringify(updatedInstalledApp));
      



        
      


        alert('App Installed Successfully')
    }


    return (
        <div>

            <div className='md:flex justify-start gap-8 py-10 border-b border-gray-300 '>
                <div className=' '>
                    <img className=' rounded-lg h-60' src={image} alt="" />
                </div>

                <div className=''>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='border-b-1 text-gray-500 py-2'>Dveloped By: <span className=' font-bold text-[#632EE3]'>{companyName}</span></p>


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

                    <button onClick={() => handleInstall(app.id)} className='btn bg-[#00D390] mt-4'>Install Now {size}</button>

                </div>


                


            </div>

              <div className=''>
                   <h1> Rechart:</h1>
                    {
                       ratings.map((rating, index) => <Chart key={index} rating={rating}></Chart>)
                    }
                </div>

                <p>Description:{description}</p>



        </div>
    );
};

export default AppDetails;