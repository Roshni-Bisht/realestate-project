import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [message, setMessage] = useState("");

  // ===============================
  // 🟢 REGISTER USER
  // ===============================
  const registerUser = async (username, email, password) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        email,
        password,
      });

      setMessage(res.data.message || "✅ Registered successfully!");
      return res.data;
    } catch (err) {
      console.error("Registration error:", err.response?.data || err);
      setMessage(err.response?.data?.error || "❌ Registration failed!");
      throw err;
    }
  };

  // ===============================
  // 🟢 LOGIN USER
  // ===============================
  const loginUser = async (username, password) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", {
        username,
        password,
      });

      if (res.data.username) {
        localStorage.setItem("username", res.data.username);
        setUsername(res.data.username);
        setMessage("✅ Login successful!");
      }
      return res.data;
    } catch (err) {
      console.error("Login error:", err.response?.data || err);
      setMessage(err.response?.data?.error || "❌ Invalid credentials!");
      throw err;
    }
  };

  // ===============================
  // 🟢 LOGOUT USER
  // ===============================
  const logoutUser = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/logout/");
    } catch (err) {
      console.warn("Logout error:", err.response?.data || err);
    }

    localStorage.removeItem("username");
    setUsername(null);
    setMessage("👋 Logged out successfully!");
  };

  // ===============================
  // 🟡 AUTO-CLEAR MESSAGES
  // ===============================
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // ===============================
  // 🟢 CONTEXT EXPORT
  // ===============================
  return (
    <AuthContext.Provider
      value={{
        username,
        message,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
