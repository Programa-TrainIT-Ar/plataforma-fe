import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useCasesHook } from '../../app/(main)/module/architecture/interactionHook/useCasesHook';
import { ModuleEntity } from '../../app/(main)/module/architecture/domain/entity';

interface Props {
    onSearch?: ({ value }: { value: string }) => Promise<void>;
}

export default function Search({ onSearch }: Props) {
    const [value, setValue] = useState<string>('');
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;

    //!Error hanlder is missing here, i need creat a catched global error component with a class

    return (
        <div className="w-full max-h-3rem flex justify-content-center ">
            <span className="w-full p-input-icon-left align-items-center justify-content-center">
                <i onClick={() => onSearch && onSearch({ value })} className="pi pi-search text-white text-xl cursor-pointer" />
                <InputText onChange={(evt) => setValue(evt.target.value)} placeholder={dictionary.SearchModule} className="border-none w-full max-h-full bg-bluegray-900 border-round-3xl" />
            </span>
        </div>
    );
}
