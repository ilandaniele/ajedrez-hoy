import React from "react";
import galiciaIcon from '../assets/galicia.svg'
import paypalIcon from '../assets/paypal.svg';
import mercadoPagoIcon from '../assets/mercadopago.svg';
import hotmartIcon from '../assets/hotmart.svg';

const PaymentMethods = ({ hotmartEnabled = false, hotmartLinks = [] }) => {

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">💰 Métodos de Pago</h2>

      {/* Transferencia */}
      <div className="flex items-center gap-2 mt-4 mb-2">
        <img src={galiciaIcon} alt="Banco Galicia" className="w-6 h-6" />
        <h3 className="text-xl font-semibold text-blue-400"> Transferencia Bancaria (Banco Galicia)</h3>
      </div>
      <ul className="list-disc list-inside text-gray-300">
        <li><b>Titular:</b> Guillermo José Llanos</li>
        <li><b>Número de cuenta:</b> 4049050-4 236-9</li>
        <li><b>CBU:</b> 0070236430004049050496</li>
        <li><b>DNI:</b> 14525430</li>
        <li><b>Alias CBU:</b> CONDE.CELDA.COMETA</li>
      </ul>

      {/* PayPal */}
      <div className="flex items-center gap-2 mt-6 mb-2">
        <img src={paypalIcon} alt="PayPal" className="w-6 h-6" />
        <h3 className="text-xl font-semibold text-blue-400">PayPal</h3>
      </div>
      <p className="text-gray-300">
        Para pagos internacionales, usa:&nbsp;
        <a
          href="https://paypal.me/AjedrezHOY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          paypal.me/AjedrezHOY
        </a>
      </p>

      {/* Mercado Pago */}
      <div className="flex items-center gap-2 mt-6 mb-2">
        <img src={mercadoPagoIcon} alt="Mercado Pago" className="w-6 h-6" />
        <h3 className="text-xl font-semibold text-blue-400">💳 Mercado Pago</h3>
      </div>
      <ul className="list-disc list-inside text-gray-300">
        <li><b>CVU:</b> 0000003100079028915553</li>
        <li><b>Alias:</b> ajedrezhoy</li>
        <li><b>CUIT/CUIL:</b> 20145254303</li>
      </ul>

      {/* Hotmart */}
      {hotmartEnabled && hotmartLinks.length > 0 && (
        <>
          <div className="flex items-center gap-2 mt-6 mb-2">
            <img src={hotmartIcon} alt="Hotmart" className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Hotmart</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            {hotmartLinks.map((link, index) => (
              <li key={index}>
                👉{" "}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PaymentMethods;
