import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { Attractions } from './components/Attractions';
import { BudgetPlanner } from './components/BudgetPlanner';
import { WeatherWidget } from './components/WeatherWidget';
import { TripItinerary } from './components/TripItinerary';
import { CurrencyConverter } from './components/CurrencyConverter';
import { destinations } from './data/destinations';
import type { Destination, ExpenseCategory } from './types';

function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [expenses, setExpenses] = useState<ExpenseCategory[]>([]);
  const [tripDays, setTripDays] = useState(3);

  const handleSearch = (from: string, to: string, days: number) => {
    const destination = destinations.find(
      d => d.name.toLowerCase() === to.toLowerCase()
    );
    setSelectedDestination(destination || null);
    setTripDays(days);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Plane className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Travel Planner</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />

        {selectedDestination && (
          <div className="mt-8 space-y-8">
            {/* Destination Overview */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-4xl font-bold mb-2">
                    {selectedDestination.name}, {selectedDestination.country}
                  </h2>
                  <p className="text-xl">{selectedDestination.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WeatherWidget city={selectedDestination.name} />
              <CurrencyConverter destinationCountry={selectedDestination.country} />
            </div>

            {/* Attractions */}
            <Attractions destination={selectedDestination} />

            {/* Trip Itinerary */}
            <TripItinerary destination={selectedDestination.name} days={tripDays} />

            {/* Budget Planner */}
            <BudgetPlanner onUpdateBudget={setExpenses} />
          </div>
        )}

        {!selectedDestination && (
          <div className="mt-16 text-center text-gray-600">
            <p className="text-xl">
              Enter your departure and destination cities to start planning your trip!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;