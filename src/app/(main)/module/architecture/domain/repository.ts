import { ResponseRequest } from "../../../../../utils/resonseRequestObj";
import { ModuleEntity } from "./entity";

export interface BaseRepositoryModule {
  create(bodyData: ModuleEntity): Promise<ResponseRequest>;
  search(bodyData: string): Promise<ResponseRequest>;

}