import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AlertProtection from "./Components/AlertProtection";
import ProtectedRoute from "./Components/ProtectedRoute";
const App = () => {
  const [user, setUser] = useState(null);
  const login = () => setUser({ name: "hachem", role: "user" });
  const logout = () => setUser(null);

  return (
    <div>
      <h1>React Router</h1>
      {!user ? (
        <button onClick={login}>se connecte</button>
      ) : (
        <button onClick={logout}>se deconnecte</button>
      )}
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute user={user && user.role == "Admin"}>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<p>There's nothing here:404!</p>} />
        <Route path="/not_connected" element={<AlertProtection />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
