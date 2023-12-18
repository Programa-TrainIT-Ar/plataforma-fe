import { ModuleEntity } from '../domain/entity';
import { RepositoryModuleImpl } from '../infrastructure/repositoryImpl';

export class UseCasesModule {
  repository: RepositoryModuleImpl;

  constructor(repositoryImpl: RepositoryModuleImpl) {
    this.repository = repositoryImpl;
  }

  async createModule(moduleData: ModuleEntity): Promise<string> {
    const messageResponse = await this.repository.create(moduleData)
    return messageResponse;
  }
}
