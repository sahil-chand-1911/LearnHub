import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Learn from './pages/Learn';
import TopicDetail from './pages/TopicDetail';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Roadmaps from './pages/Roadmaps';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/:category"
            element={
              <PrivateRoute>
                <Learn />
              </PrivateRoute>
            }
          />
          <Route
            path="/topic/:id"
            element={
              <PrivateRoute>
                <TopicDetail />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
