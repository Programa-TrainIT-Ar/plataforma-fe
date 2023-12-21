import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { useCasesHook } from '../architecture/interactionHook/useCasesHook';
import { ModuleEntity } from '../architecture/domain/entity';

interface Props {
    getModulesSearched: (modules:ModuleEntity[]) => void
}

export default function SearchModule({getModulesSearched}:Props) {
    const cases = useCasesHook();
    const [value,setValue] =  useState<string>();
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;
    const [err, setErr] = useState({
        status:false,
        msg:""
    });
    //!Error hanlder is missing here, i need creat a catched global error component with a class
    const moduleSearchHandler = async () => {
        if(!value) return 
        const response = await cases.searchModules(value).catch((err:Error) => setErr({
            msg:err.message,
            status:true
        }));
        response && getModulesSearched(response.data)
    }

    return (
        <div className="w-full max-h-3rem flex justify-content-center ">
            <span className="w-full p-input-icon-left align-items-center justify-content-center">
                <i onClick={moduleSearchHandler} className="pi pi-search text-white text-xl cursor-pointer" />
                <InputText onChange={evt => setValue(evt.target.value)} placeholder={dictionary.SearchModule} className="border-none w-full max-h-full bg-bluegray-900 border-round-3xl" />
            </span>
        </div>
    );
}
