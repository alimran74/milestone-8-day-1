
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
    {
      "id": 1,
      "name": "Arafat",
      "Math": 85,
      "English": 78,
      "Science": 92
    },
    {
      "id": 2,
      "name": "Nusrat",
      "Math": 90,
      "English": 8,
      "Science": 95
    },
    {
      "id": 3,
      "name": "Rakib",
      "Math": 70,
      "English": 55,
      "Science": 72
    },
    {
      "id": 4,
      "name": "Sumaiya",
      "Math": 95,
      "English": 82,
      "Science": 89
    },
    {
      "id": 5,
      "name": "Tanvir",
      "Math": 60,
      "English": 38,
      "Science": 63
    },
    {
      "id": 6,
      "name": "Meherun",
      "Math": 88,
      "English": 80,
      "Science": 85
    },
    {
      "id": 7,
      "name": "Shuvo",
      "Math": 75,
      "English": 70,
      "Science": 78
    },
    {
      "id": 8,
      "name": "Mim",
      "Math": 98,
      "English": 95,
      "Science": 99
    },
    {
      "id": 9,
      "name": "Hasib",
      "Math": 82,
      "English": 76,
      "Science": 80
    },
    {
      "id": 10,
      "name": "Rima",
      "Math": 89,
      "English": 85,
      "Science": 90
    }
  ]
  
const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="Math" stroke="#8884d8"></Line>
                <Line type="monotone" dataKey="Science" stroke="red"></Line>
                <Line type="monotone" dataKey={"English"} stroke="aqua"></Line>
                
            </LineChart>
        </div>
    );
};

export default ResultCharts;