import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface CurrencyConverterProps {
  destinationCountry: string;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ destinationCountry }) => {
  const [amount, setAmount] = useState<number>(1000);
  
  // Dummy exchange rates - in production, these would come from an API
  const exchangeRates: Record<string, number> = {
    'France': 0.011,  // EUR
    'Japan': 1.65,    // JPY
    'UAE': 0.045,     // AED
    'Indonesia': 178.57, // IDR
    'India': 1,       // INR
    'Maldives': 0.18  // MVR
  };

  const rate = exchangeRates[destinationCountry] || 1;
  const convertedAmount = amount * rate;

  const getCurrencySymbol = (country: string) => {
    const symbols: Record<string, string> = {
      'France': '€',
      'Japan': '¥',
      'UAE': 'د.إ',
      'Indonesia': 'Rp',
      'India': '₹',
      'Maldives': 'MVR'
    };
    return symbols[country] || '$';
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Currency Converter</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (INR)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw size={20} className="text-blue-500" />
          <div className="text-lg">
            ₹{amount.toLocaleString()} = {getCurrencySymbol(destinationCountry)}{convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>
    </div>
  );
};