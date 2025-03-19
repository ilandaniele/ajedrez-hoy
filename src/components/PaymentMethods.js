import React from "react";

const PaymentMethods = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">💰 Métodos de Pago</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-400">📌 Transferencia Bancaria (Banco Galicia)</h3>
      <ul className="list-disc list-inside text-gray-300">
        <li><b>Titular:</b> Guillermo José Llanos</li>
        <li><b>Número de cuenta:</b> 4049050-4 236-9</li>
        <li><b>CBU:</b> 0070236430004049050496</li>
        <li><b>DNI:</b> 14525430</li>
        <li><b>Alias CBU:</b> CONDE.CELDA.COMETA</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-400">🏦 Pagos desde el exterior (PayPal)</h3>
      <p className="text-gray-300">
        Para pagos internacionales, usa:
        <a href="https://paypal.me/AjedrezHOY" target="_blank" rel="noopener noreferrer"
           className="text-blue-400 hover:underline"> paypal.me/AjedrezHOY</a>
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-400">💳 Mercado Pago</h3>
      <ul className="list-disc list-inside text-gray-300">
        <li><b>CVU:</b> 0000003100079028915553</li>
        <li><b>Alias:</b> ajedrezhoy</li>
        <li><b>CUIT/CUIL:</b> 20145254303</li>
      </ul>
    </div>
  );
};

export default PaymentMethods;
