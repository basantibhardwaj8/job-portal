// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);  // Update user state
    });
    return () => unsubscribe();  // Cleanup subscription on component unmount
  }, []);

  // Login function
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Signup function
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Logout function
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
