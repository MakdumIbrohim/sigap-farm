'use client';

import { MapContainer, TileLayer, ZoomControl, LayersControl, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapStore } from '../store/useMapStore';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock data for demonstration
const mockDisasterZones = [
  {
    id: 'dz-1',
    name: 'Flood Zone - Jakarta',
    type: 'flood',
    coordinates: [
      [-6.15, 106.8],
      [-6.15, 106.9],
      [-6.25, 106.9],
      [-6.25, 106.8],
    ],
    severity: 'high',
  },
  {
    id: 'dz-2',
    name: 'Drought Area - Central Java',
    type: 'drought',
    coordinates: [
      [-7.5, 110.2],
      [-7.5, 110.5],
      [-7.8, 110.5],
      [-7.8, 110.2],
    ],
    severity: 'medium',
  },
];

const mockLandParcels = [
  {
    id: 'lp-1',
    name: 'Sawah Pak Joko',
    owner: 'Pak Joko',
    coordinates: [
      [-6.2, 106.85],
      [-6.2, 106.87],
      [-6.22, 106.87],
      [-6.22, 106.85],
    ],
    cropType: 'Rice',
    disasterHistory: ['Flood 2023'],
  },
  {
    id: 'lp-2',
    name: 'Kebun Pak Slamet',
    owner: 'Pak Slamet',
    coordinates: [
      [-7.6, 110.3],
      [-7.6, 110.35],
      [-7.65, 110.35],
      [-7.65, 110.3],
    ],
    cropType: 'Vegetables',
    disasterHistory: ['Drought 2023'],
  },
];

const MapView = () => {
  const { center, zoom, layers } = useMapStore();

  // Base layers
  const baseLayers = [
    {
      name: 'OpenStreetMap',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      checked: true,
    },
    {
      name: 'Satellite',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      checked: layers.satellite,
    },
  ];


  // Get color based on severity
  const getColorBySeverity = (severity: string) => {
    switch (severity) {
      case 'low': return '#22c55e'; // green
      case 'medium': return '#eab308'; // yellow
      case 'high': return '#f97316'; // orange
      case 'critical': return '#ef4444'; // red
      default: return '#6b7280'; // gray
    }
  };

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        className="w-full h-full"
      >
        <ZoomControl position="bottomright" />
        <LayersControl position="topright">
          {baseLayers.map((layer, index) => (
            <LayersControl.BaseLayer
              key={index}
              name={layer.name}
              checked={layer.checked}
            >
              <TileLayer
                url={layer.url}
                attribution={layer.attribution}
              />
            </LayersControl.BaseLayer>
          ))}
          
          <LayersControl.Overlay name="Disaster Zones" checked={layers.disasterZones}>
            <div>
              {layers.disasterZones && mockDisasterZones.map((zone) => (
                <Polygon
                  key={zone.id}
                  positions={zone.coordinates as [number, number][]}
                  color={getColorBySeverity(zone.severity)}
                  fillColor={getColorBySeverity(zone.severity)}
                  fillOpacity={0.5}
                  weight={2}
                >
                  <Popup>
                    <div>
                      <h3 className="font-bold">{zone.name}</h3>
                      <p>Type: {zone.type}</p>
                      <p>Severity: {zone.severity}</p>
                    </div>
                  </Popup>
                </Polygon>
              ))}
            </div>
          </LayersControl.Overlay>
          
          <LayersControl.Overlay name="Land Parcels" checked={layers.landParcels}>
            <div>
              {layers.landParcels && mockLandParcels.map((parcel) => (
                <Polygon
                  key={parcel.id}
                  positions={parcel.coordinates as [number, number][]}
                  color="#16a34a" // green
                  fillColor="#16a34a"
                  fillOpacity={0.3}
                  weight={2}
                >
                  <Popup>
                    <div>
                      <h3 className="font-bold">{parcel.name}</h3>
                      <p>Owner: {parcel.owner}</p>
                      <p>Crop: {parcel.cropType}</p>
                      <p>Disaster History: {parcel.disasterHistory.join(', ')}</p>
                    </div>
                  </Popup>
                </Polygon>
              ))}
            </div>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapView;