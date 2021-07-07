export interface PutVaccineRecordDto {
  id: string;
  name: string;
  type: string;
  lastVaccineDate: Date;
  nextVaccineDate: Date;
  description: string;
}
