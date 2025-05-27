import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function formatted(totalseconds){
    const hours = Math.floor(totalseconds / 3600);
    const minutes = Math.floor((totalseconds % 3600) / 60);
    const seconds = totalseconds % 60;
    return `${hours} : ${minutes} : ${seconds}`;
}
const data =[
    {time:0, pressure: 0},
    {time:1800, pressure: 30},
    {time:3600, pressure: 10}, 
    {time: 5400, pressure: 22},
    {time: 7200, pressure: 15},
];

function Graph(){
    return(
        <div className = "graph">
            <LineChart
            width ={500}
            height ={300}
            data = {data}
            margin = {{top: 5, right: 10, left: 0, bottom: 5}}
            style={{backgroundColor: "black" , borderRadius: "10px", padding: "20px"}}
            >
             <Line
             type="monotone"
             dataKey="pressure"
             stroke ="red"
             strokeWidth={3}            
             />   
             <CartesianGrid stroke ="#444444"/>
             <XAxis
                dataKey="time"
                tickFormatter={formatted}
                stroke="#CCCCCC"
                label = {{value: "Time (HH : MM : SS)",fill:'#0033A0',fontSize:'20px', position: "Bottom", offset: 20 ,dy:30}}
                style={{fill: "#FFFFFF" ,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    textAnchor: 'middle',
                }}
             />
             <YAxis
             stroke="#CCCCCC"
                label = {{value: "Pressure ( mmHg )",fontSize:'20px', fill :'#0033A0', angle: -90, position: "insideLeft", offset: 20,dy:50}}
                style ={{fill: "#FFFFFF",
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    textAnchor: 'middle',
                }}
             />
             <Tooltip
             labelFormatter={formatted}
             contentStyle={{backgroundColor: "white", border:'none'}}
             />
            </LineChart>
        </div>
    );
}
export default Graph;