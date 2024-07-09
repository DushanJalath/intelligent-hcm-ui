import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/WeeklyViewAttendanceBarchart.css'
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const ChartComponent = ({ title }) => {
    const [dataObjects, setDataObjects] = useState([]);
    const [totalWorkHourToday, setTotalWorkHourToday] = useState("");
    const [currentDate, setCurrentDate] = useState(() => {
        const now = new Date();
        return {
            month: now.getMonth() + 1,  
            year: now.getFullYear(),
        };
    });

    useEffect(() => {
        const fetchAttendanceData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://127.0.0.1:8000/employee_weekly_workhour_summary', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDataObjects(response.data.weekly_summary);
                setTotalWorkHourToday(response.data.total_hours_today)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };
        fetchAttendanceData();
    }, []);

    const filterData = () => {
        return dataObjects.filter(item => item.month === currentDate.month && item.year === currentDate.year);
    };

    const prepareChartData = () => {
        const filteredData = filterData();

        const weeks = Array.from({ length: 4 }, (_, i) => i + 1);
        const hours = weeks.map(week => {
            const dataForWeek = filteredData.find(item => item.week === week);
            return dataForWeek ? dataForWeek.totalHours : 0;
        });

        return {
            labels: weeks.map(week => `Week ${week}`),
            datasets: [
                {
                    label: 'Hours Worked',
                    data: hours,
                    backgroundColor: '#02936F',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
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
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'black',
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
                max: Math.max(...data.datasets[0].data) + 1, 
            },
        },
        elements: {
            bar: {
                borderRadius: 4,
            },
        },
    };

    const handleMonthChange = (direction) => {
        setCurrentDate((prevDate) => {
            let newMonth = prevDate.month + direction;
            let newYear = prevDate.year;

            if (newMonth > 12) {
                newMonth = 1;
                newYear += 1;
            } else if (newMonth < 1) {
                newMonth = 12;
                newYear -= 1;
            }

            return { month: newMonth, year: newYear };
        });
    };

    return (
        <div className='weekly-view-bar-container'>
            <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>
            Overview of a user's total work hours for each week.</p>
            <Card sx={{ padding: 2, boxShadow: 3, width: 420, marginLeft: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconButton onClick={() => handleMonthChange(-1)} title="Previous Month" sx={{ color: '#02936F' }}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                        {months[currentDate.month - 1]} {currentDate.year}
                    </Typography>
                    <IconButton onClick={() => handleMonthChange(1)} title="Next Month" sx={{ color: '#02936F' }}>
                        <ArrowForward />
                    </IconButton>
                </Box>
                <Box sx={{ height: 250, width: '95%' }}>
                    <Bar data={data} options={options} />
                </Box>
                <Typography variant="body1" align="center" sx={{ marginTop: 0 }}>
                    Today Total hours {totalWorkHourToday}
                </Typography>
            </Card>
        </div>
    );
};

export default ChartComponent;
