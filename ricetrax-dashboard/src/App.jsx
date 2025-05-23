import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import SalesRecord from "./components/SalesRecord";
import "./App.css";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar setView={setView} />
      <div className="main-content">
        {view === "dashboard" && <Dashboard />}
        {view === "sales" && <SalesRecord />}
      </div>
    </div>
  );
}

export default App;
