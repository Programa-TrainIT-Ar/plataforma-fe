import { ResponseRequest } from "../../../../../utils/resonseRequestObj";
import { ModuleEntity } from "./entity";

export interface BaseRepositoryModule {
  create(bodyData: ModuleEntity): Promise<ResponseRequest>;
  edit(bodyData: ModuleEntity): Promise<ResponseRequest>;
  search(moduleName: string): Promise<ResponseRequest>;
  delete(moduleId: string):Promise<ResponseRequest>;
}