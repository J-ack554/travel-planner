import React from 'react';
import { Star } from 'lucide-react';
import { Destination } from '../types';

interface AttractionsProps {
  destination: Destination;
}

export const Attractions: React.FC<AttractionsProps> = ({ destination }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">Popular Attractions in {destination.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destination.attractions.map((attraction) => (
          <div key={attraction.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={attraction.image}
              alt={attraction.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{attraction.name}</h3>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{attraction.rating}</span>
                </div>
              </div>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};