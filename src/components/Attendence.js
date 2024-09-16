import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

const Attendance = () => {
    // Mock attendance data for the student
    const attendanceData = [
        { course: 'Mathematics', attendance: '90%' },
        { course: 'Physics', attendance: '85%' },
        { course: 'Computer Science', attendance: '95%' },
    ];

    return (
        <div>
            <Box sx={{border:1,mt:10,ml:30, width:600 ,padding:3}}>
           
            <ul> <Table sx={{mr:10}}>
            <TableBody>
            <Typography variant='h5'>Attendance</Typography>
                {attendanceData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.course}</TableCell>
                          <TableCell>{item.attendance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
              
            </ul>
            </Box>
        </div>
    );
};

export default Attendance;
