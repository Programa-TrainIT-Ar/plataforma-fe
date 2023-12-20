import { ModuleEntity } from "../domain/entity";
import { BaseRepositoryModule } from "../domain/repository";
import { ResponseRequest } from '../../../../../utils/resonseRequestObj';
import { searchModulesAdapter } from "./adapters";
import { filterModulesByName } from "../../../../../utils/filterModules";

export class RepositoryModuleImpl implements BaseRepositoryModule {
  async search(moduleName: string): Promise<ResponseRequest> {
    //! i need create endpoint backend to search by name
    try {
      const res = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/modules`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
      })).json()
      //!this make a map to normalize the response with an adapter.
      const adaptedListModule = searchModulesAdapter(res)
      
      const data: ResponseRequest = {
        succes:true,
        err:false,
        message:"",
        data:filterModulesByName(adaptedListModule,moduleName) //!this filter modules by name , i think we could make this in backend
      }
      return data;
    } catch (error) {
      let err = error as Error
      throw new Error(err.message)
    }
  }

  async create(bodyData: ModuleEntity): Promise<ResponseRequest> {
    try {
      const res = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/modules`, {
        method: "POST", 
        body: JSON.stringify(bodyData), 
        headers: {
          "Content-Type": "application/json",
        },
      })).json()
      const data: ResponseRequest = {
        succes:true,
        err:false,
        message:res,
        data:null
      }
      return data;
    } catch (error) {
      console.log("entre");
      let err = error as Error
      throw new Error(err.message)
    }
  }
}