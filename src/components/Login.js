
// import React, { useState } from 'react';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../firebase'; // Correct path to import auth
// import { auth, signInWithEmailAndPassword } from '../firebase';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
// import './Login.css'; // Import the CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook to navigate after login

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(''); // Reset any previous error

//     try {
//       await signInWithEmailAndPassword(auth, email, password); // Firebase login method
//       // Redirect user to the home page or dashboard after successful login
//       navigate('/task/new'); // You can replace '/dashboard' with any route you want to navigate to
//     } catch (err) {
//       setError(err.message); // Set error message if login fails
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>

//       <div className="signup-link">
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset any previous error

    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase login method
      navigate('/tasks/new'); // Set error message if login fails
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
