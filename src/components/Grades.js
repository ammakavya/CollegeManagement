import { Table, TableCell, TableRow, Typography, TableBody } from "@mui/material";

const grades = [
  { subject: 'English', marks: '100' },
  { subject: 'Maths', marks: '100' },
  { subject: 'Engineering', marks: '100' },
  { subject: 'Physics', marks: '100' },
  { subject: 'Computers', marks: '100' }
];

const Grades = () => {
  return (
    <div>
      <Typography variant="h6">My Grades</Typography>
      <Table>
        <TableBody>
          {grades.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Grades;
