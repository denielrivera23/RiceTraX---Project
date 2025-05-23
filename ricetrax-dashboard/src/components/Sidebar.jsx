import React from "react";
import "../App.css";

function Sidebar({ setView }) {
    return (
        <div className="sidebar">
            <div className="logo">RiceTrax</div>
            <button onClick={() => setView("dashboard")}>📊 Dashboard</button>
            <button onClick={() => setView("sales")}>🧾 Sales Record</button>
            <button>📦 Inventory</button>
            <button>💸 POS</button>
            <button>🔔 Notification</button>
            <button>⚙️ Settings</button>
            <div className="logout">↩ Log out</div>
        </div>
    );
}

export default Sidebar;
