import React, { useEffect, useState } from "react";
import LoginPage from "./Login/LoginPage";
import Dashboard from "./Dashboard/Dashboard";
import Employees from "./Dashboard/Employees";

function App() {
  const [authed, setAuthed] = useState(() => localStorage.getItem("hris_authed") === "1");
  const [currentPage, setCurrentPage] = useState(() => localStorage.getItem("hris_page") || "dashboard");

  useEffect(() => {
    if (authed) localStorage.setItem("hris_authed", "1");
    else localStorage.removeItem("hris_authed");
  }, [authed]);

  useEffect(() => {
    localStorage.setItem("hris_page", currentPage);
  }, [currentPage]);

  const handleLogin = () => {
    setAuthed(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setAuthed(false);
    setCurrentPage("dashboard");
  };

  if (!authed) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentPage === "employees") {
    return <Employees onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
  }

  return <Dashboard onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
}

export default App;