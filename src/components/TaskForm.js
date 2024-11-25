
// export default TaskForm;
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext';  // Correct path
import './TaskForm.css';  // Import the CSS file
const TaskForm = () => {
  const { id } = useParams();  // Get the taskId from the URL
  const { tasks, createTask, updateTask, loading, error } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // To navigate to Task List after submit

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // If there is a taskId, update the task
      updateTask(id, title, description);
    } else {
      // If there is no taskId, create a new task
      createTask(title, description);
    }
    navigate('/tasks');  // Navigate to task list after form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
    </form>
  );
};

export default TaskForm;
