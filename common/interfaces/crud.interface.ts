export interface CRUD {
  list: () => Promise<any>;
  getById: (id: string) => Promise<any>;
  create: (resource: any) => Promise<any>;
  updateById: (id: string, resource: any) => Promise<string>;
  deleteById: (id: string) => Promise<string>;
}
