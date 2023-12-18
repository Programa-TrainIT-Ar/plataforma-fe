import { ModuleEntity } from "./entity";

export interface BaseRepositoryModule {
  create(bodyData: ModuleEntity): Promise<string>;
}