import { ModuleEntity } from "../domain/entity";
import { BaseRepositoryModule } from "../domain/repository";

export class RepositoryModuleImpl implements BaseRepositoryModule {
  async create(bodyData: ModuleEntity): Promise<string> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/modules`, {
      method: 'POST',
      body: JSON.stringify(bodyData)
    })
    return JSON.stringify(res)
  }
}