import React from 'react';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,


    Legend,
    CartesianGrid,
    ResponsiveContainer,
    ComposedChart,
    Line,
} from "recharts";

const Chart = ({ ratings }) => {
    // const { name, count } = rating || {};

    const data = ratings
        .map(rating => ({
            name: rating.name,
            value: rating.count,
        }))
        .reverse();

    console.log(data)



    // ];

    // console.log(data)

    return (
        <div className="bg-base-100 rounded-xl  h-80"> 

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff7300" barSize={20} radius={[0, 10, 10, 0]} /> 
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};



export default Chart;