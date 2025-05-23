import React from "react";

function SalesRecord() {
    return (
        <div className="sales-record">
            <h2>Sales Record</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Date</th><th>Product</th><th>Qty Sold</th><th>Unit Price</th><th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>001</td><td>03/10/2025</td><td>MAHARLIKA</td><td>25kg</td><td>₱50</td><td>₱1250</td></tr>
                    <tr><td>001</td><td>04/01/2025</td><td>DINORADO</td><td>10kg</td><td>₱50</td><td>₱500</td></tr>
                    <tr><td>002</td><td>04/05/2025</td><td>MAHARLIKA</td><td>15kg</td><td>₱50</td><td>₱750</td></tr>
                    <tr><td>002</td><td>04/05/2025</td><td>DINORADO</td><td>25kg</td><td>₱50</td><td>₱1250</td></tr>
                </tbody>
            </table>
            <button onClick={() => window.print()}>🖨 Print</button>
        </div>
    );
}

export default SalesRecord;
