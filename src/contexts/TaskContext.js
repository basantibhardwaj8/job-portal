// // src/contexts/TaskContext.js
// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch tasks from the API
//   useEffect(() => {
//     const fetchTasks = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   // Create task
//   const createTask = async (title, description) => {
//     setLoading(true);
//     try {
//       const newTask = {
//         title,
//         description,
//         completed: false,
//       };
//       const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
//       setTasks([...tasks, response.data]);
//     } catch (error) {
//       console.error('Error creating task:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update task
//   const updateTask = async (id, title, description) => {
//     setLoading(true);
//     try {
//       const updatedTask = { title, description };
//       await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTask);
//       setTasks(tasks.map((task) => (task.id === id ? { ...task, title, description } : task)));
//     } catch (error) {
//       console.error('Error updating task:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete task
//   const deleteTask = async (id) => {
//     setLoading(true);
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       setTasks(tasks.filter((task) => task.id !== id));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask, loading }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };
// src/contexts/TaskContext.js
import { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      setTasks(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const createTask = async (title, description) => {
    setLoading(true);
    try {
      const newTask = { title, description, completed: false };
      const docRef = await addDoc(collection(db, 'tasks'), newTask);
      setTasks([...tasks, { id: docRef.id, ...newTask }]);
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, title, description) => {
    setLoading(true);
    try {
      const taskDoc = doc(db, 'tasks', id);
      await updateDoc(taskDoc, { title, description });
      setTasks(tasks.map((task) => (task.id === id ? { ...task, title, description } : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    try {
      const taskDoc = doc(db, 'tasks', id);
      await deleteDoc(taskDoc);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask, loading }}>
      {children}
    </TaskContext.Provider>
  );
};
