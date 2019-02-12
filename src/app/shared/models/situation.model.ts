export class ZoneModel {
  id: string;
  name: string;
  camerasList: Array<CameraModel>;
}

export class CameraModel {
  id: string;
  name: string;
  situationsList: Array<SituationModel>
}

export class SituationModel {
  id: string;
  name: string;
  factors: Array<string>;
  detectionFrame: Array<number>;
  escalationTypes: Array<string>;
  dateTime: {
    rangeFrom: String;
    rangeTo: String;
  };
  isEnabled: boolean;
}
