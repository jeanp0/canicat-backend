export interface PostVaccineRecordDto {
  id: string;
  name: string;
  type: string;
  lastVaccineDate: Date;
  nextVaccineDate: Date;
  description?: string;
}
