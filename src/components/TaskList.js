// // src/components/TaskList.js
// import React, { useContext } from 'react';
// import { TaskContext } from '../contexts/TaskContext';  // Correct path to TaskContext

// const TaskList = () => {
//   const { tasks, deleteTask, loading } = useContext(TaskContext);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Task List</h2>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;

// src/components/TaskList.js
// src/components/TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';  // Correct path to TaskContext
import { Link } from 'react-router-dom';
import './TaskLisr.css'; // Import the CSS file

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);  // Get deleteTask from context

  const handleDelete = (id) => {
    // Confirm with the user before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      deleteTask(id); // Call deleteTask from context to remove the task
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/tasks/edit/${task.id}`}>Edit</Link>
            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/tasks/new">Create New Task</Link>
    </div>
  );
};

export default TaskList;
