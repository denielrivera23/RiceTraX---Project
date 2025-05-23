import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const products = [
  { name: "Sinandomeng", image: "sinandomeng.png" },
  { name: "Dinorado", image: "dinorado.png" },
  { name: "Pandan Rice", image: "pandan.png" },
  { name: "Maharlika", image: "maharlika.png" },
  { name: "Jasmine Rice", image: "jasmine.png" },
  { name: "Harvester's", image: "harvesters.png" },
];

const prices = {
  Maharlika: 58,
  Dinorado: 60,
};

export default function POSApp() {
  const [cart, setCart] = useState({
    Maharlika: 25,
    Dinorado: 25,
  });
  const [payment, setPayment] = useState(3000);

  const handleQuantityChange = (product, delta) => {
    setCart((prev) => ({
      ...prev,
      [product]: Math.max(0, (prev[product] || 0) + delta),
    }));
  };

  const totalAmount = Object.entries(cart).reduce((total, [name, qty]) => {
    const price = prices[name] || 0;
    return total + price * qty;
  }, 0);

  const change = payment - totalAmount;

  return (
    <div className="flex h-screen font-sans">
      <aside className="w-60 bg-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl mb-6">☰</div>
          <nav className="space-y-4">
            <div className="nav-item font-bold">🏠 Dashboard</div>
            <div className="nav-item">📋 Inventory</div>
            <div className="nav-item">💰 POS</div>
            <div className="nav-item">🔔 Notification</div>
            <div className="nav-item">⚙️ Settings</div>
          </nav>
        </div>
        <div className="logout">↩️ Log out</div>
      </aside>

      <main className="flex-1 flex">
        <div className="w-1/3 p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full mb-4 p-2 rounded-full border"
          />
          <div className="text-lg font-semibold mb-2">PRODUCTS</div>
          <div className="space-y-2">
            {products.map((product) => (
              <img key={product.name} src={product.image} alt={product.name} className="rounded-md shadow" />
            ))}
          </div>
        </div>

        <div className="w-2/3 bg-gray-100 p-6">
          <div className="text-right mb-4 text-sm">May 15, 2025 11:00 am</div>

          <table className="w-full text-left mb-6">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>PRICE PER KG</th>
                <th>TOTAL PRICE</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cart).map(([name, quantity], index) => (
                <tr key={name}>
                  <td>00{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <Button onClick={() => handleQuantityChange(name, -1)}>-</Button>
                    <span className="mx-2">{quantity} kg</span>
                    <Button onClick={() => handleQuantityChange(name, 1)}>+</Button>
                  </td>
                  <td>₱{prices[name].toFixed(2)}</td>
                  <td>₱{(prices[name] * quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right space-y-2">
            <div className="text-lg font-semibold">Total Amount: ₱{totalAmount.toFixed(2)}</div>
            <div className="flex items-center gap-2">
              <label className="text-md">Payment:</label>
              <input
                type="number"
                value={payment}
                onChange={(e) => setPayment(parseFloat(e.target.value))}
                className="p-2 rounded-md border"
              />
            </div>
            <div className="flex gap-2">
              {[50, 100, 200, 500, 1000].map((val) => (
                <Button key={val} onClick={() => setPayment(payment + val)} className="bg-green-400">
                  {val}
                </Button>
              ))}
            </div>
            <div className="text-md">Change: ₱{change.toFixed(2)}</div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button className="bg-gray-600 text-white">⬇️</Button>
            <Button className="bg-gray-400 text-white">🖨️</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
