import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { MdInstallDesktop } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    // console.log(app)
    return (
        <Link to={`/app/${app.id}`} >
            <div className=' hover:scale-105 duration-300 '>
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure className=''>
                        <img className='w-full object-cover h-52'
                            src={app.image}
                            alt="App Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{app.title}</h2>

                        <div className="card-actions justify-between">
                            <button className="btn bg-amber-50 text-green-400 "><MdInstallDesktop />{app.downloads}</button>
                            <button className="btn  bg-amber-50 text-red-400 "><FaStar />{app.ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;