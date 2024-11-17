// Individual measurement interfaces for each garment type
export interface SherwaniMeasurements {
  length?: string;
  chest?: string;
  blowChest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
  cap?: string;
  fullHeight?: string;
}

export interface KurtaMeasurements {
  length?: string;
  chest?: string;
  blowChest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
  cap?: string;
  fullHeight?: string;
}

export interface TrouserMeasurements {
  length?: string;
  mohri?: string;
  hip?: string;
  waist?: string;
  knee?: string;
  calf?: string;
  ankle?: string;
}

export interface CoatMeasurements {
  length?: string;
  chest?: string;
  blowChest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
  cap?: string;
  fullHeight?: string;
}

export interface PantMeasurements {
  length?: string;
  waist?: string;
  thigh?: string;
  bottom?: string;
  calf?: string;
  hip?: string;
}

// Main customer input interface
export interface CustomerInput {
  name: string;
  orderNumber: string;
  phone: string;
  address: string;
  sherwani?: SherwaniMeasurements;
  kurta?: KurtaMeasurements;
  trouser?: TrouserMeasurements;
  coat?: CoatMeasurements;
  pant?: PantMeasurements;
}
