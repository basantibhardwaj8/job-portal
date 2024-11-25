

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';  // Correct path
import { TaskProvider } from './contexts/TaskContext';  // Correct path
import Login from './components/Login';  // Correct path
import Signup from './components/Signup';  // Correct path
import TaskList from './components/TaskList';  // Correct path
import TaskForm from './components/TaskForm';  // Correct path

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          {/* <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/tasks">Tasks</Link>
          </nav> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/new" element={<TaskForm />} />  {/* For creating a new task */}
            <Route path="/tasks/edit/:id" element={<TaskForm />} />  {/* For editing an existing task */}
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
