// export class ModuleEntity {
//   id?: string;
//   name: string;
//   description: string;
//   moduleStartDate: string;

//   constructor({ id, name, description, moduleStartDate }: { id?: any, name: any, description: any, moduleStartDate: any }) {
//     this.id = id
//     this.name = name
//     this.description = description
//     this.moduleStartDate = moduleStartDate
//   }
// }


export interface ModuleEntity {
  id?: string;
  name: string;
  description: string;
  moduleStartDate: string;
}