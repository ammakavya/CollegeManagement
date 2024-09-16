import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Students from './Students';
import Courses from './Courses';
import Faculty from './Faculty';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faculty" element={<Faculty />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
