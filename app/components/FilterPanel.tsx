'use client';

import { useMapStore } from '../store/useMapStore';
import { DisasterType } from '../types/disaster';

const FilterPanel = () => {
  const { disasterType, dateRange, setDisasterType, setDateRange, resetFilters } = useMapStore();

  const disasterTypes: { value: DisasterType; label: string }[] = [
    { value: 'flood', label: 'Flood' },
    { value: 'drought', label: 'Drought' },
    { value: 'volcanic_eruption', label: 'Volcanic Eruption' },
    { value: 'earthquake', label: 'Earthquake' },
    { value: 'landslide', label: 'Landslide' },
  ];

  const handleDisasterTypeChange = (type: DisasterType | '') => {
    setDisasterType(type === '' ? null : type);
  };

  const handleStartDateChange = (date: string) => {
    setDateRange({
      ...dateRange,
      start: date ? new Date(date) : null,
    });
  };

  const handleEndDateChange = (date: string) => {
    setDateRange({
      ...dateRange,
      end: date ? new Date(date) : null,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Reset Filters
        </button>
      </div>

      <div className="space-y-4">
        {/* Disaster Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Disaster Type
          </label>
          <select
            value={disasterType || ''}
            onChange={(e) => handleDisasterTypeChange(e.target.value as DisasterType || '')}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">All Types</option>
            {disasterTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={dateRange.start ? dateRange.start.toISOString().split('T')[0] : ''}
              onChange={(e) => handleStartDateChange(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            <input
              type="date"
              value={dateRange.end ? dateRange.end.toISOString().split('T')[0] : ''}
              onChange={(e) => handleEndDateChange(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Apply Button */}
        <div className="pt-2">
          <button 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            onClick={() => console.log('Filters applied')}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;