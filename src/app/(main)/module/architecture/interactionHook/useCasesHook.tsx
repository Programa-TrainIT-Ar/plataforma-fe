import { UseCasesModule } from '../application/useCases';
import { RepositoryModuleImpl } from '../infrastructure/repositoryImpl';

export const useCasesHook = () => {
    return new UseCasesModule(new RepositoryModuleImpl());
};
