export interface CRUD {
  create: (resource: any) => Promise<any>;
  getAll: (
    limit: number | undefined,
    offset: number | undefined,
  ) => Promise<any>;
  getById: (id: string) => Promise<any>;
  update: (record: any, resource: any) => Promise<any>;
  delete: (record: any) => Promise<any>;
}
