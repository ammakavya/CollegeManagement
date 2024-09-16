import React from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Courses = () => {
    const courses = [
        { id: 1, title: 'Computer Science', credits: 3 },
        { id: 2, title: 'Mathematics', credits: 4 },
    ];

    return (
        <div>
            <Typography variant="h4">Courses</Typography>
            <Button variant="contained" color="primary">Add Course</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Credits</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course.id}>
                            <TableCell>{course.id}</TableCell>
                            <TableCell>{course.title}</TableCell>
                            <TableCell>{course.credits}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Courses;
