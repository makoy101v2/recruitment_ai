import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./screens/Login";
import JobListings from "./screens/JobListings";
import ApplicationForm from "./screens/ApplicationForm";
import HRDashboard from "./screens/HRDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import WhistleblowingForm from "./screens/WhistleblowingForm";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoutes";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/jobs" />} />
        <Route path="jobs" element={<JobListings />} />
        <Route path="apply/:jobId" element={<ApplicationForm />} />
        <Route path="hr" element={<HRDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="report" element={<WhistleblowingForm />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
