'use client';

import { useState } from 'react';
import { LandParcel, Disaster } from '../../types/disaster';

// Mock data for demonstration
const mockLandParcel: LandParcel = {
  id: 'land-1',
  name: 'Sawah Pak Tani',
  owner: 'Pak Joko',
  area: 2.5,
  coordinates: [[-6.2, 106.8], [-6.2, 106.9], [-6.3, 106.9], [-6.3, 106.8]],
  cropType: 'Rice',
  plantingDate: new Date('2023-06-15'),
  harvestDate: new Date('2023-10-20'),
  disasterHistory: [
    {
      id: 'disaster-1',
      type: 'flood',
      name: 'Jakarta Flood 2023',
      description: 'Severe flooding affected agricultural areas',
      startDate: new Date('2023-02-10'),
      endDate: new Date('2023-02-20'),
      affectedArea: [[-6.2, 106.8], [-6.2, 106.9], [-6.3, 106.9], [-6.3, 106.8]],
      severity: 'high',
    },
  ],
  soilQuality: 'good',
  irrigation: true,
};

const mockDisasters: Disaster[] = [
  {
    id: 'disaster-1',
    type: 'flood',
    name: 'Jakarta Flood 2023',
    description: 'Severe flooding affected agricultural areas',
    startDate: new Date('2023-02-10'),
    endDate: new Date('2023-02-20'),
    affectedArea: [[-6.2, 106.8], [-6.2, 106.9], [-6.3, 106.9], [-6.3, 106.8]],
    severity: 'high',
  },
  {
    id: 'disaster-2',
    type: 'drought',
    name: 'Dry Season 2023',
    description: 'Extended dry period affected crop growth',
    startDate: new Date('2023-07-01'),
    endDate: new Date('2023-09-15'),
    affectedArea: [[-6.2, 106.8], [-6.2, 106.9], [-6.3, 106.9], [-6.3, 106.8]],
    severity: 'medium',
  },
];

export default function LandDetailPage() {
  // const { id } = useParams<{ id: string }>();
  const [landParcel] = useState<LandParcel>(mockLandParcel);
  const [disasters] = useState<Disaster[]>(mockDisasters);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Land Parcel Details</h1>
        <p className="text-gray-600">Detailed information about agricultural land</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{landParcel.name}</h2>
              <p className="text-gray-600">Owner: {landParcel.owner}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              landParcel.soilQuality === 'poor' ? 'bg-red-100 text-red-800' :
              landParcel.soilQuality === 'fair' ? 'bg-yellow-100 text-yellow-800' :
              landParcel.soilQuality === 'good' ? 'bg-green-100 text-green-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              Soil Quality: {landParcel.soilQuality}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Area</p>
              <p className="font-medium">{landParcel.area} hectares</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Crop Type</p>
              <p className="font-medium">{landParcel.cropType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Planting Date</p>
              <p className="font-medium">{formatDate(landParcel.plantingDate)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Harvest Date</p>
              <p className="font-medium">
                {landParcel.harvestDate ? formatDate(landParcel.harvestDate) : 'Not harvested yet'}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-3 ${
              landParcel.irrigation ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {landParcel.irrigation ? 'Has Irrigation' : 'No Irrigation'}
            </span>
          </div>
        </div>

        {/* Map Preview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Location</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
            <span className="text-gray-500">Map Preview</span>
          </div>
        </div>

        {/* Disaster History */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Disaster History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Disaster
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Severity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {disasters.map((disaster) => (
                  <tr key={disaster.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{disaster.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">{disaster.type.replace('_', ' ')}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {formatDate(disaster.startDate)} - {disaster.endDate ? formatDate(disaster.endDate) : 'Ongoing'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityColor(disaster.severity)}`}>
                        {disaster.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {disaster.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}