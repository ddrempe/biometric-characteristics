export interface DeviceSet {
  Description: string;
  DeviceTypeId: number;
  Id: number;
  Manufacturer: string;
  Name: string;
}

export interface DeviceTypeSet {
  Description: string;
  Id: number;
  Name: string;
}

export interface FaceSet {
  Id: number;
  Position: string;
  Sample_Id: number;
}

export interface FingerprintSet {
  Finger: string;
  Hand: string;
  Id: number;
  Sample_Id: number;
}

export interface GaitSet {
  Direction: string;
  FrameNumber: number;
  Id: number;
  Sample_Id: number;
}

export interface HandwritingSet {
  Id: number;
  Sample_Id: number;
  TextId: number;
}

export interface IrisSet {
  Eye: string;
  Id: number;
  Sample_Id: number;
}

export interface KeyboardSet {
  Description: string;
  Id: number;
  Name: string;
  Type: string;
}

export interface KeystrokeDatasetSet {
  Description: string;
  Id: number;
  Name: string;
}

export interface KeystrokeSet {
  Id: number;
  KeyboardId: number;
  KeystrokeDatasetId: number;
  Password: string;
  PersonId: number;
  PpTime: string;
  PrTime: string;
  RawPress: string;
  RawRelease: string;
  RpTime: string;
  RrTime: string;
  Success: boolean;
  TimeToType: string;
  Vector: string;
}

export interface LanguageSet {
  Code: string;
  Id: number;
  Name: string;
}

export interface PalmprintSet {
  Hand: string;
  Id: number;
  Position: string;
  Sample_Id: number;
}

export interface PersonSet {
  Address: string;
  DateOfBirth: string;
  FirstName: string;
  Gender: string;
  Id: number;
  LastName: string;
}

export interface SampleDatasetSet {
  Description: string;
  Id: number;
  Name: string;
}

export interface SampleSet {
  DateCreated: string;
  DeviceId: number;
  FileName: string;
  FilePath: string;
  FileType: string;
  FullFilePath: string;
  Id: number;
  PersonId: number;
  SampleDatasetId: number;
  SampleTypeId: number;
}

export interface SampleTypeSet {
  Description: string;
  Id: number;
  Name: string;
}

export interface SignatureSet {
  Id: number;
  Penups: boolean;
  Pressure: number;
  Sample_Id: number;
  SyntheticTimestamp: number;
  XCoordinate: number;
  YCoordinate: number;
}

export interface SpeechSet {
  Id: number;
  Quality: string;
  Sample_Id: number;
}

export interface TextSet {
  Content: string;
  Id: number;
  LanguageId: number;
}
