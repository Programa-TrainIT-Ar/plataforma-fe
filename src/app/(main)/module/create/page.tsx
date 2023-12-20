'use client';
import DataTableModules from '../components/DataTableModules';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import DateInitial from '../components/DateInitial';
import { InputTextarea } from 'primereact/inputtextarea';
import SearchModule from '../components/SearchModule';
import { Button } from 'primereact/button';
import { FormEvent, useState } from 'react';
import { useCasesHook } from '../architecture/interactionHook/useCasesHook';
import { ModuleEntity } from '../architecture/domain/entity';

const CreateModule = () => {
    const cases = useCasesHook();
    const [err, setErr] = useState({
        status:false,
        msg:""
    });
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;

    const createModuleHandler = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const dataFromForm = Object.fromEntries(new FormData(evt.target as HTMLFormElement));
        const bodyData: ModuleEntity = { name: String(dataFromForm['name']), description: String(dataFromForm['name']), moduleStartDate: String(dataFromForm['date']) };
        await cases.createModule(bodyData).catch((err:Error) => {
            setErr({
                status:true,
                msg:err.message
            })
        });
    };

    return (
        <div className="w-10 flex flex-column justify-content-center align-items-center my-0 mx-auto gap-5">
            <form className="mt-6 flex flex-column w-8 gap-3" onSubmit={createModuleHandler}>
                {err.status ? <p>{err.msg}</p>:<></>}
                <h4>{dictionary.CreateModule}</h4>
                <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                    <InputPrimary size="large" title={dictionary.NameOfModule} placeHolder={dictionary.PholderNameModule} />
                    <DateInitial />
                </div>
                <div className="flex w-full flex-column gap-2 ">
                    <label className="text-600 text-sm">{dictionary.Description}</label>
                    <InputTextarea required name="description" placeholder={dictionary.ObjectiveOfTheModule} rows={5} cols={30} className="max-w-full border-round-xl border-none bg-bluegray-900" />
                </div>
                <div className="flex justify-content-between align-items-center">
                    <SearchModule />
                    <Button type="submit" label={dictionary.Create} icon="pi pi-plus" iconPos="right" className="h-full w-2 ml-6 border-round-xl p-3" />
                </div>
            </form>
            <DataTableModules />
        </div>
    );
};

export default CreateModule;
