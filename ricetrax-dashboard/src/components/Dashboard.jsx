import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    PieChart, Pie, Cell, Legend,
} from "recharts";
import "../App.css";

const stockData = [
    { name: "Maharlika", stock: 54 },
    { name: "Dinorado", stock: 45 },
    { name: "Jasmin", stock: 40 },
    { name: "Angelika", stock: 30 },
    { name: "Sinandomeng", stock: 0 },
];

const pieData = [
    { name: "Maharlika", value: 15 },
    { name: "Dinorado", value: 10 },
    { name: "Jasmin", value: 10 },
    { name: "Angelika", value: 10 },
    { name: "Sinandomeng", value: 9 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F14F60"];

function Dashboard() {
    const dateNow = new Date().toLocaleString();

    return (
        <div className="dashboard">
            <div className="header">
                <div className="datetime">{dateNow}</div>
            </div>

            <div className="stats">
                <div className="stat">₱73,000.00<br />Today Total Sales</div>
                <div className="stat">246<br />Total Stocks (sacks)</div>
                <div className="stat">24<br />Sold Stocks (sacks)</div>
                <div className="stat">0<br />Low Stocks</div>
            </div>

            <div className="charts">
                <div className="chart-section">
                    <h3>Stock Overview (Bar Chart)</h3>
                    <BarChart width={400} height={250} data={stockData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="stock" fill="#8884d8" />
                    </BarChart>
                </div>

                <div className="chart-section">
                    <h3>Sold Stocks (Pie Chart)</h3>
                    <PieChart width={300} height={250}>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

