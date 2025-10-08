import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { MdInstallDesktop } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    // console.log(app)
    return (
        <Link to={`/app/${app.id}`} >
            <div className=''>
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure className=''>
                        <img className='w-full object-cover  h-48'
                            src={app.image}
                            alt="Shoes" />
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