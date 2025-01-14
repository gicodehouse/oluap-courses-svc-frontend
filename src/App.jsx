import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import UserIndex from "./pages/users/UserIndex";
import EnrollmentIndex from "./pages/enrollments/EnrollmentIndex";
import CourseIndex from "./pages/courses/CourseIndex";
import LoginPage from "./pages/auth/LoginPage";
import HomeIndex from "./pages/home/HomeIndex";
import UserDetail from "./pages/users/UserDetail";

function App() {
  

  const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthenticated={true}><HomeIndex /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<ProtectedRoute isAuthenticated={true}><UserIndex /></ProtectedRoute>} />
        <Route path="/users/:id/details" element={<ProtectedRoute isAuthenticated={true}><UserDetail /></ProtectedRoute>} />

        <Route path="/courses" element={<ProtectedRoute isAuthenticated={true}><CourseIndex /></ProtectedRoute>} />
        <Route path="/enrollments" element={<ProtectedRoute isAuthenticated={true}><EnrollmentIndex /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
