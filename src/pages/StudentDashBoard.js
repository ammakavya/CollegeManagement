import React from 'react';
import Courses from '../components/Courses';
import Attendance from '../components/Attendence';
import Grades from '../components/Grades';
import { Box, Typography } from '@mui/material';

const details ={
    name :'priya',
    year :'2nd',
    semester :'3',
    gender :'female',
    mobileNumber :'9876543210',
    emailId :'abc@gmail.com'
}
const StudentDashboard = () => {
    return (
        <div>
            <h1>Welcome to Your Dashboard</h1>
            <Box sx={{padding:'20px'}}>
            <Typography sx={{padding:'10px'}}>name: {details.name}</Typography>
            <Typography sx={{padding:'10px'}}>YEAR: {details.year}</Typography>
            <Typography sx={{padding:'10px'}}>semester: {details.semester}</Typography>
            <Typography sx={{padding:'10px'}}>gender: {details.gender}</Typography>
            <Typography sx={{padding:'10px'}}>mobileNumber: {details.mobileNumber}</Typography>
            <Typography sx={{padding:'10px'}}>emailId: {details.emailId}</Typography>
            </Box>
           
        </div>
    );
};

export default StudentDashboard;
