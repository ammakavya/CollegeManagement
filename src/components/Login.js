import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Clear error message on each login attempt
        setError('');
        
        // Mock login function with basic validation
        if (username === 'student' && password === 'password') {
            localStorage.setItem('userRole', 'student');  // Store role as a string
            setUserRole('student');
            navigate('/student-dashboard');
        } else if (username === 'faculty' && password === 'password') {
            localStorage.setItem('userRole', 'faculty');  // Store role as a string
            setUserRole('faculty');
            navigate('/faculty-dashboard');
        } else if (username === 'admin' && password === 'password') {
            localStorage.setItem('userRole', 'admin');  // Store role as a string
            setUserRole('admin');
            navigate('/admin-dashboard');
        } else {
            setError('Invalid login credentials');
        }
    };

    return (
        <Box sx={{ display: 'flex', width:'500px',height:'300px', flexDirection: 'column', alignItems: 'center', ml: '35%', mt: 5,borderRadius:'20px', border: 2 }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error}  // Show error on username field if login fails
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}  // Show error on password field if login fails
            />
            {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {error}
                </Typography>
            )}
            <Button variant="contained"  onClick={handleLogin} sx={{ mt: 2,backgroundColor:'black',color:"white" }}>
                Login
            </Button>
        </Box>
    );
};

export default Login;
