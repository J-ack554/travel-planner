import React from 'react';
import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';

interface WeatherWidgetProps {
  city: string;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ city }) => {
  // Dummy weather data - in production, this would come from a weather API
  const weather = {
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="text-yellow-500" size={32} />;
      case 'rainy':
        return <CloudRain className="text-blue-500" size={32} />;
      default:
        return <Cloud className="text-gray-500" size={32} />;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Weather in {city}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getWeatherIcon(weather.condition)}
          <div>
            <div className="text-3xl font-bold">{weather.temp}°C</div>
            <div className="text-gray-600">{weather.condition}</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Thermometer size={16} className="text-gray-500" />
            <span>Humidity: {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud size={16} className="text-gray-500" />
            <span>Wind: {weather.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};