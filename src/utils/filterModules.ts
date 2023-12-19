import { ModuleEntity } from "../app/(main)/module/architecture/domain/entity";

export function filterModulesByName(modulesArr: ModuleEntity[], moduleName: string): ModuleEntity[] {
  const normalizeName = moduleName.toLowerCase().trim(); 
  
  return modulesArr.filter(module =>
    module.name.toLowerCase().includes(normalizeName)
  );
}