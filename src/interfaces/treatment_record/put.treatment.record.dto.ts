export interface PutTreatmentRecordDto {
  id: string;
  type: string;
  productName: string;
  dose: number;
  lastTreatmentDate: Date;
  nextTreatmentDate: Date;
  description: string;
}
