import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Sign up method
  const signUp = async (email, password) => {
    try {
      const existingUser = await AsyncStorage.getItem("user");
      if (existingUser) {
        const { email: savedEmail } = JSON.parse(existingUser);
        if (savedEmail === email) {
          return false; // User already exists
        }
      }
      await AsyncStorage.setItem("user", JSON.stringify({ email, password }));
      setUser({ email, password });
      return true; // Sign-up successful
    } catch (error) {
      console.error("Failed to sign up", error);
      return false; // Sign-up failed
    }
  };

  // Sign in method
  const signIn = async (email, password) => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);
        if (email === savedEmail && password === savedPassword) {
          setUser({ email, password });
          return true; // Sign-in successful
        }
      }
      return false; // Sign-in failed
    } catch (error) {
      console.error("Failed to sign in", error);
      return false; // Sign-in failed
    }
  };

  // Sign out method
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, selectedDoctor, setSelectedDoctor }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
