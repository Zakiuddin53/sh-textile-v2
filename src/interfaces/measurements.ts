export interface SherwaniMeasurements {
  length?: string;
  chest?: string;
  blowChest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  kb?: string;
  kf?: string;
  neck?: string;
  shoulder?: string;
  cap?: string;
  fullHeight?: string;
  cb?: string;
  cf?: string;
}

export interface KurtaMeasurements {
  length?: string;
  chest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
}

export interface JubbaMeasurements {
  length?: string;
  chest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
}

export interface TrouserMeasurements {
  length?: string;
  mohri?: string;
  hip?: string;
  waist?: string;
  thigh?: string;
}

export interface CoatMeasurements {
  length?: string;
  chest?: string;
  blowChest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  kb?: string;
  kf?: string;
  neck?: string;
  cb?: string;
  cf?: string;
  shoulder?: string;
  fullHeight?: string;
}

export interface PantMeasurements {
  length?: string;
  waist?: string;
  thigh?: string;
  bottom?: string;
  hip?: string;
}

export interface ShirtMeasurements {
  length?: string;
  chest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
}

export interface ApronMeasurements {
  length?: string;
  chest?: string;
  waist?: string;
  hip?: string;
  sleeve?: string;
  sleeveMohri?: string;
  neck?: string;
  shoulder?: string;
}

export interface SadriMeasurements {
  length?: string;
  cb?: string;
  cf?: string;
  chest?: string;
  belowChest?: string;
  kb?: string;
  kf?: string;
  stomach?: string;
  hip?: string;
  neck?: string;
  shoulder?: string;
}

export interface PaejamaMeasurements {
  length?: string;
  hip?: string;
  waist?: string;
  mohri?: string;
}

export interface ShalwarMeasurements {
  length?: string;
  hip?: string;
  waist?: string;
  mohri?: string;
}

export interface ChoodidarPaejamaMeasurements {
  length?: string;
  hip?: string;
  waist?: string;
  mohri?: string;
  knee?: string;
  aroundKnee?: string;
  aroundCalf?: string;
}

export interface NoteMeasurements {
  text?: string;
}

export interface CustomerInput {
  name: string;
  phone: string;
  address: string;
  sherwani?: SherwaniMeasurements;
  kurta?: KurtaMeasurements;
  trouser?: TrouserMeasurements;
  coat?: CoatMeasurements;
  pant?: PantMeasurements;
  shirt?: ShirtMeasurements;
  sadri?: SadriMeasurements;
  paejama?: PaejamaMeasurements;
  shalwar?: ShalwarMeasurements;
  choodidarPaejama?: ChoodidarPaejamaMeasurements;
  jubba?: JubbaMeasurements;
  apron?: ApronMeasurements;
  note?: NoteMeasurements;
}
