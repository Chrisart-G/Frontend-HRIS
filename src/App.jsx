import React, { useEffect, useState } from "react";
import LoginPage from "./Login/LoginPage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [authed, setAuthed] = useState(() => localStorage.getItem("hris_authed") === "1");

  useEffect(() => {
    if (authed) localStorage.setItem("hris_authed", "1");
    else localStorage.removeItem("hris_authed");
  }, [authed]);

  const handleLogin = () => setAuthed(true);
  const handleLogout = () => setAuthed(false);

  return authed ? <Dashboard onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />;
}

export default App;