import React from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Faculty = () => {
    const faculty = [
        { id: 1, name: 'Dr. Alan Grant', department: 'Physics' },
        { id: 2, name: 'Prof. Ellie Sattler', department: 'Biology' },
    ];

    return (
        <div>
            <Typography variant="h4">Faculty</Typography>
            <Button variant="contained" color="primary">Add Faculty</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faculty.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>{member.id}</TableCell>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.department}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Faculty;
