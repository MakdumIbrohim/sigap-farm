export type DisasterType = 'flood' | 'drought' | 'volcanic_eruption' | 'earthquake' | 'landslide';

export interface Disaster {
  id: string;
  type: DisasterType;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  affectedArea: [number, number][]; // Polygon coordinates
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface LandParcel {
  id: string;
  name: string;
  owner: string;
  area: number; // in hectares
  coordinates: [number, number][]; // Polygon coordinates
  cropType: string;
  plantingDate: Date;
  harvestDate?: Date;
  disasterHistory: Disaster[];
  soilQuality: 'poor' | 'fair' | 'good' | 'excellent';
  irrigation: boolean;
}