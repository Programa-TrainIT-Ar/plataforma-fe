import { ModuleEntity } from "../domain/entity";
import { BaseRepositoryModule } from "../domain/repository";
import { ResponseRequest } from '../../../../../utils/resonseRequestObj';

export class RepositoryModuleImpl implements BaseRepositoryModule {
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