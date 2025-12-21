import { create } from 'zustand';
import { DisasterType } from '../types/disaster';

interface MapState {
  // Map state
  center: [number, number];
  zoom: number;
  bounds: [[number, number], [number, number]] | null;
  
  // Filter state
  disasterType: DisasterType | null;
  dateRange: { start: Date | null; end: Date | null };
  
  // Selected land parcel
  selectedLandId: string | null;
  
  // Layer controls
  layers: {
    satellite: boolean;
    terrain: boolean;
    disasterZones: boolean;
    landParcels: boolean;
  };
  
  // Actions
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setBounds: (bounds: [[number, number], [number, number]] | null) => void;
  setDisasterType: (type: DisasterType | null) => void;
  setDateRange: (range: { start: Date | null; end: Date | null }) => void;
  setSelectedLandId: (id: string | null) => void;
  toggleLayer: (layer: keyof MapState['layers']) => void;
  resetFilters: () => void;
}

export const useMapStore = create<MapState>()((set) => ({
  // Initial state
  center: [-6.200000, 106.816666], // Jakarta coordinates as default
  zoom: 10,
  bounds: null,
  disasterType: null,
  dateRange: { start: null, end: null },
  selectedLandId: null,
  layers: {
    satellite: false,
    terrain: false,
    disasterZones: true,
    landParcels: true,
  },
  
  // Actions
  setCenter: (center) => set({ center }),
  setZoom: (zoom) => set({ zoom }),
  setBounds: (bounds) => set({ bounds }),
  setDisasterType: (disasterType) => set({ disasterType }),
  setDateRange: (dateRange) => set({ dateRange }),
  setSelectedLandId: (selectedLandId) => set({ selectedLandId }),
  toggleLayer: (layer) => set((state) => ({
    layers: {
      ...state.layers,
      [layer]: !state.layers[layer],
    },
  })),
  resetFilters: () => set({
    disasterType: null,
    dateRange: { start: null, end: null },
  }),
}));