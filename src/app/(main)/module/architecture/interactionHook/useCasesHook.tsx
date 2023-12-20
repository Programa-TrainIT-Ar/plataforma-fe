import { useMemo, useRef } from 'react';
import { UseCasesModule } from '../application/useCases';
import { RepositoryModuleImpl } from '../infrastructure/repositoryImpl';

export const useCasesHook = () => {
    const repositoryModuleImpl = new RepositoryModuleImpl();
    const cases = useRef(new UseCasesModule(repositoryModuleImpl));

    return cases.current;
};
