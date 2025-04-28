import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Costs = ({ plans, scrollToPayment, columns = "sm:grid-cols-2 lg:grid-cols-5" }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const defaultHighlighted = plans.findIndex(plan => plan.highlight);
    if (defaultHighlighted !== -1) {
      setSelectedPlan(defaultHighlighted);
    }
  }, [plans]);

  const handleSelectPlan = (index) => {
    if (selectedPlan === index) {
      // Si ya está seleccionado, scrollea abajo
      scrollToPayment();
    } else {
      // Si no, selecciona
      setSelectedPlan(index);
    }
  };

  return (
    <div className={`grid grid-cols-1 ${columns} gap-6 mb-20`}>
      {plans.map((plan, idx) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`relative rounded-lg p-6 text-center shadow-md cursor-pointer transition-all flex flex-col justify-between min-h-[460px] group ${
            selectedPlan === idx
              ? "bg-blue-950 border-2 border-blue-500"
              : "bg-[#1e2533] hover:bg-blue-950 border-2 border-transparent hover:border-blue-500"
          }`}
          key={idx}
          onClick={() => handleSelectPlan(idx)}
        >
          {plan.highlight && idx === selectedPlan && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
              ⭐ Recomendado
            </div>
          )}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-2 mt-2">{plan.title}</h3>

            {/* Precios */}
            {plan.originalPrice && plan.price && (
              <div className="mb-4">
                <p className="text-white text-lg">
                  <span className="line-through decoration-red-500 decoration-2">{plan.originalPrice}</span>
                </p>
                <p className="text-green-400 text-2xl font-bold">{plan.price}</p>
                <p className="text-xs text-gray-400">pesos argentinos</p>
              </div>
            )}

            {(plan.originalPriceUSD && plan.priceUSD) && (
              <>
                <hr className="border-t border-gray-700 my-2" />
                <div className="mb-4">
                  <p className="text-white text-sm">
                    <span className="line-through decoration-red-500 decoration-2">{plan.originalPriceUSD}</span>
                  </p>
                  <p className="text-green-400 text-lg font-semibold">{plan.priceUSD}</p>
                  <p className="text-xs text-gray-400">dólares estadounidenses</p>
                </div>
              </>
            )}

            {plan.usd && plan.ars && (
              <>
                <p className="line-through text-red-400">{plan.originalPrice}</p>
                <p className="text-green-400 text-xl font-semibold">{plan.usd}</p>
                <p className="text-green-400 text-sm mb-4">{plan.ars}</p>
              </>
            )}

            {plan.description && (
              <p className="text-gray-300 mb-4 text-sm">{plan.description}</p>
            )}
            <div className="border-t border-gray-600 my-4"></div>
            <ul className="text-center text-sm text-gray-300 space-y-2 mb-4">
              {plan.features && plan.features.map((feat, i) => (
                <li key={i} className="border-b border-gray-700 pb-2">{feat}</li>
              ))}
            </ul>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Previene que también seleccione tarjeta
                scrollToPayment();
              }}
              className={`px-4 py-2 rounded-md font-semibold w-full transition-colors duration-200 ${
                selectedPlan === idx
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                  : "bg-blue-600 group-hover:bg-yellow-500 group-hover:text-black hover:bg-blue-700 text-white"
              }`}
            >
              {plan.buttonTitle || plan.cta}
            </button>
            {plan.discount && (
              <p className="text-red-400 text-sm mt-2 font-bold">{plan.discount}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Costs;
