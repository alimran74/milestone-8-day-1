import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart
    const markschartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            English: studentData.marks.English,
            Math: studentData.marks.Math,
            Science: studentData.marks.Science
        }
        const avg = (student.English + student.Math + student.Science) /3;
        student.avg = avg;
        return student;
    })
    console.log(markschartData);


    return (
        <div>
            <BarChart width={500} height={300} data={markschartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip ></Tooltip>
                <Bar dataKey="avg" fill="aqua"></Bar>
                <Bar dataKey="Math" fill="red"></Bar>
                <Bar dataKey="English" fill="green"></Bar>
                <Bar dataKey="Science" fill="black"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;