import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (from: string, to: string, days: number) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [days, setDays] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(from, to, days);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="Enter departure city"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="Enter destination city"
            required
          />
        </div>
        <div className="md:w-32">
          <label className="block text-sm font-medium text-gray-700 mb-1">Days</label>
          <input
            type="number"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(Math.max(1, Math.min(30, parseInt(e.target.value))))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};