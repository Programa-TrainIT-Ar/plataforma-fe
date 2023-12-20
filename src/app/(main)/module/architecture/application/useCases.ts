import { ResponseRequest } from '../../../../../utils/resonseRequestObj';
import { ModuleEntity } from '../domain/entity';
import { RepositoryModuleImpl } from '../infrastructure/repositoryImpl';

export class UseCasesModule {
  repository: RepositoryModuleImpl;

  constructor(repositoryImpl: RepositoryModuleImpl) {
    this.repository = repositoryImpl;
  }

  async createModule(moduleData: ModuleEntity): Promise<ResponseRequest> {
    const messageResponse = await this.repository.create(moduleData)
    return messageResponse;
  }

  async searchModules (moduleName:string): Promise<ResponseRequest<ModuleEntity[]>> {
    const messageResponse = await this.repository.search(moduleName)
    return messageResponse;
  }
}
