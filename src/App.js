import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Login from './components/Login';
import Attendance from './components/Attendence';
import StudentDashboard from './pages/StudentDashBoard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Grades from './components/Grades';

 const App = () => {
  
  const getRole = () => {
    const role = localStorage.getItem('userRole');
    try {
      return JSON.parse(role); // If it was stored as a JSON string
    } catch (e) {
      return role; // If it's just a string
    }
  };
  
  const [userRole, setUserRole] = useState(getRole() || '');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useLayoutEffect(() => {
    const role = getRole();
    console.log('User role set in useLayoutEffect:', role); // Log the actual value
    if (typeof role === 'string') {
      setUserRole(role); // Only set if it's a valid string
    }
  }, []);
  

  useEffect(() => {
    const handleRoleChange = () => {
      const role = getRole();
      console.log('Role from localStorage:', role);
      setUserRole(role);
    };

    window.addEventListener('storage', handleRoleChange);
    return () => window.removeEventListener('storage', handleRoleChange);
  }, []);

  const PrivateRoute = ({ children, role }) => {
    return userRole === role ? <>{children}</> : <Navigate to="/login" />;
  };

  return (
    <Box  sx={{
      backgroundImage: 'url("https://img.freepik.com/premium-photo/open-holy-bible-book-background_488220-82422.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
    <div className="flex flex-col min-h-screen">
      <Navbar setUserRole={setUserRole} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        {userRole && (
          <Sidebar userRole={userRole} open={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        <main className="flex-1 p-4">
          <Routes>
            <Route
              path="/"
              element={
                userRole === 'student' ? (
                  <Navigate to="/student-dashboard" />
                ) : userRole === 'faculty' ? (
                  <Navigate to="/faculty-dashboard" />
                ) : userRole === 'admin' ? (
                  <Navigate to="/admin-dashboard" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/student-dashboard" element={<PrivateRoute role="student"><StudentDashboard /></PrivateRoute>} />
            <Route path="/faculty-dashboard" element={<PrivateRoute role="faculty"><FacultyDashboard /></PrivateRoute>} />
            <Route path="/admin-dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendence" element={<Attendance />} />
            <Route path="/login" element={<Login setUserRole={setUserRole} />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </main>
      </div>
    </div>
    </Box>
  );
};


export default App;