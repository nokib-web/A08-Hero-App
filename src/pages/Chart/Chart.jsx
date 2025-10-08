import React from 'react';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
   
    Legend,
    CartesianGrid,
} from "recharts";

const Chart = ({ rating }) => {
    // console.log(rating)
    const data = [
        {
            name: rating.name,
            value: rating.count,
        },
    ];

    return (
        <div className='h-20 w-100%' >
            <BarChart width={600} height={80} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="yellow" />
            </BarChart>
        </div>
    );
};



export default Chart;