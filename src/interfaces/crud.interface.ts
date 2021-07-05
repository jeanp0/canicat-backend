export interface CRUD {
  create: (resource: any) => Promise<any>;
  read: (limit: number | undefined, offset: number | undefined) => Promise<any>;
  update: (record: any, resource: any) => Promise<any>;
  delete: (record: any) => Promise<any>;
}
