import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useAppSelector } from '../../../../redux/hooks/hooks';

export default function SearchModule() {
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;

    return (
        <div className="w-full max-h-3rem flex justify-content-center ">
            <span className="w-full p-input-icon-left align-items-center justify-content-center">
                <i className="pi pi-search text-white text-xl " />
                <InputText placeholder={dictionary.SearchModule} className="border-none w-full max-h-full bg-bluegray-900 border-round-3xl" />
            </span>
        </div>
    );
}
