import { ModuleEntity } from "../domain/entity"

export const searchModulesAdapter = (modulesFound:Array<any>) => {
  const listMopdulesAdapted = modulesFound.map((module) => {
    return {
      id:module["id"],
      name:module["name"],
      moduleStartDate:module["moduleStartDate"],
      description:module["description"],
    } as ModuleEntity
  })
  return listMopdulesAdapted;
}