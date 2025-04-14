import React from 'react';
import { Calendar, MapPin, Coffee, Utensils, Bed } from 'lucide-react';
import { format } from 'date-fns';

interface TripItineraryProps {
  destination: string;
  days?: number;
}

export const TripItinerary: React.FC<TripItineraryProps> = ({ destination, days = 3 }) => {
  const startDate = new Date();
  
  const generateDayPlan = (dayNum: number) => {
    const activities = [
      { time: '09:00', activity: 'Breakfast at local café', icon: Coffee },
      { time: '11:00', activity: 'Visit popular attractions', icon: MapPin },
      { time: '14:00', activity: 'Lunch at recommended restaurant', icon: Utensils },
      { time: '16:00', activity: 'Explore local markets', icon: MapPin },
      { time: '20:00', activity: 'Dinner and rest', icon: Bed },
    ];

    return (
      <div key={dayNum} className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar size={20} className="text-blue-500" />
          Day {dayNum} - {format(new Date(startDate.getTime() + (dayNum - 1) * 24 * 60 * 60 * 1000), 'MMM dd, yyyy')}
        </h3>
        <div className="space-y-4">
          {activities.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <item.icon size={20} className="text-gray-600 mt-1" />
              <div>
                <div className="font-medium">{item.time}</div>
                <div className="text-gray-600">{item.activity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">Your {days}-Day Itinerary in {destination}</h2>
      <div className="space-y-6">
        {Array.from({ length: days }, (_, i) => generateDayPlan(i + 1))}
      </div>
    </div>
  );
};