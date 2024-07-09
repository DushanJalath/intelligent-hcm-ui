import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/YearlyWorkHourBarchart.css';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const months = [
    '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const ChartComponent = ({ title }) => {
    const dataObjects1 = [
        { month: 1, year: 2023, totalHours: 3 },
        { month: 2, year: 2023, totalHours: 5 },
        { month: 3, year: 2023, totalHours: 8 },
        { month: 4, year: 2023, totalHours: 5 },
        { month: 5, year: 2023, totalHours: 3 },
        { month: 6, year: 2023, totalHours: 5 },
        { month: 7, year: 2023, totalHours: 8 },
        { month: 8, year: 2023, totalHours: 5 },
        { month: 9, year: 2023, totalHours: 4 },
        { month: 10, year: 2023, totalHours: 6 },
        { month: 11, year: 2023, totalHours: 7 },
        { month: 12, year: 2023, totalHours: 2 },
        { month: 12, year: 2024, totalHours: 15 },
    ];
    const [dataObjects, setDataObjects] = useState([]);
    useEffect(() => {
        const fetchAttendanceData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://127.0.0.1:8000/employee_yearly_workhour_summary', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDataObjects(response.data);
            
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };
        fetchAttendanceData();
    }, []);

   
    const [currentDate, setCurrentDate] = useState({
        year: 2023,
    });

    // Filter data based on the current year
    const filterData = () => {
        return dataObjects.filter(item => item.year === currentDate.year);
    };

    // Prepare chart data for the current year
    const prepareChartData = () => {
        const filteredData = filterData();

        // Aggregate hours by month
        const hoursByMonth = Array.from({ length: 12 }, (_, i) => {
            const month = i + 1;
            const dataForMonth = filteredData.find(item => item.month === month);
            return dataForMonth ? dataForMonth.totalHours : 0;
        });

        return {
            labels: months.slice(1), // Skip the empty first month
            datasets: [
                {
                    label: 'Hours Worked',
                    data: hoursByMonth,
                    backgroundColor: '#02936F',
                    borderColor: '#d3d3d3', // Grey border for the empty space
                    borderWidth: 1,
                    borderSkipped: false, // Ensure that the border color is applied to all sides of the bar
                },
            ],
        };
    };

    const data = prepareChartData();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Hours Worked',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'black',
                    autoSkip: false,
                    maxRotation: 0, 
                    minRotation: 0,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                ticks: {
                    color: 'black',
                    beginAtZero: true,
                },
                grid: {
                    display: false,
                },
                min: 0,
                max: Math.max(...data.datasets[0].data) + 1, // Adjust y-axis max value based on data
            },
        },
        elements: {
            bar: {
                borderRadius: 4,
            },
        },
    };

    // Handle year change
    const handleYearChange = (direction) => {
        setCurrentDate((prevDate) => {
            const newYear = prevDate.year + direction;
            return { year: newYear };
        });
    };

    useEffect(() => {
        // Optional: Perform any actions when currentDate changes
    }, [currentDate]);

    return (
        <div className='yearly-workhour-bar-container'>
                        <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>
            Overview of a user's total work hours for each month.</p>
            <Card sx={{ padding: 2, boxShadow: 3, width: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconButton onClick={() => handleYearChange(-1)} title="Previous Year" sx={{ color: '#02936F' }}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                        {currentDate.year}
                    </Typography>
                    <IconButton onClick={() => handleYearChange(1)} title="Next Year" sx={{ color: '#02936F' }}>
                        <ArrowForward />
                    </IconButton>
                </Box>
                <Box sx={{ height: 250, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Bar data={data} options={options} />
                </Box>
            </Card>
        </div>
    );
};

export default ChartComponent;

