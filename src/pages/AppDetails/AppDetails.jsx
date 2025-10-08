import React from 'react';
import useApps from '../../Hooks/useApps';
import { HiH1 } from 'react-icons/hi2';
import AppDetailsPages from '../AppDetailsPages/AppDetailsPages';


const AppDetails = () => {
  
    const {apps} = useApps();

    

    return (
        <div>
            {
                apps.map(app=><AppDetailsPages key={app.id} app={app}></AppDetailsPages>)
            }
        </div>
    );
};

export default AppDetails;