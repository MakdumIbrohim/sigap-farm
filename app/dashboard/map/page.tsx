'use client';

import dynamic from 'next/dynamic';
import FilterPanel from '../../components/FilterPanel';
import { useMapStore } from '../../store/useMapStore';

// Dynamically import MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import('../../components/MapView'), {
  ssr: false,
});

export default function MapPage() {
  const { layers, toggleLayer, setDisasterType } = useMapStore();

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Interactive Map</h1>
        <p className="text-gray-600">View disaster-affected agricultural areas</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 grow">
        {/* Left sidebar with filters */}
        <div className="lg:w-80 shrink-0 space-y-4">
          <FilterPanel />
          
          {/* Legend */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Map Legend</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Flood Zones</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Drought Areas</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Volcanic Eruption</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-violet-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Earthquake Zones</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Landslide Areas</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-700">Land Parcels</span>
              </div>
            </div>
          </div>
          
          {/* Layer Controls */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Map Layers</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Disaster Zones</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.disasterZones}
                    onChange={() => toggleLayer('disasterZones')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Land Parcels</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.landParcels}
                    onChange={() => toggleLayer('landParcels')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Satellite View</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.satellite}
                    onChange={() => toggleLayer('satellite')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Map container */}
        <div className="grow h-150 lg:h-auto rounded-lg overflow-hidden shadow-md relative">
          <MapView />
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 z-10">
            <div className="flex flex-col space-y-2">
              <button 
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => setDisasterType(null)}
              >
                Show All Disasters
              </button>
              <button 
                className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded"
                onClick={() => setDisasterType('flood')}
              >
                Floods Only
              </button>
              <button 
                className="px-3 py-1 text-sm bg-amber-100 hover:bg-amber-200 rounded"
                onClick={() => setDisasterType('drought')}
              >
                Droughts Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}