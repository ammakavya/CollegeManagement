import React from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Students = () => {
    const students = [
        { id: 1, name: 'John Doe', course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', course: 'Mathematics' },
    ];

    return (
        <div>
            <Typography variant="h4">Students</Typography>
            <Button variant="contained" color="primary">Add Student</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Course</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.course}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Students;
