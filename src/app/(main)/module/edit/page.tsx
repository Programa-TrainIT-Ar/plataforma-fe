'use client';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import DateInitial from '../components/DateInitial';
import { InputTextarea } from 'primereact/inputtextarea';
import SearchModule from '../../../../components/Search/Search';
import { Button } from 'primereact/button';
import DataTableModules from '../components/DataTableModules';
import { InputSwitch } from 'primereact/inputswitch';
import SwitchOnOff from '../../../../components/SwitchOnOff/SwitchOnOff';
import { FormEvent, useState, useRef } from 'react';
import { ModuleEntity } from '../architecture/domain/entity';
import { useCasesHook } from '../architecture/interactionHook/useCasesHook';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

export default function EditModule() {
    const cases = useCasesHook();
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;
    const [modulesSearched, setModulesSearched] = useState<ModuleEntity[]>();
    const [moduleIdSelected, setModuleIdSelected] = useState<string>();
    const savedDataForEdit = useRef<ModuleEntity>();
    const [err, setErr] = useState({
        status: false,
        msg: ''
    });

    const confirm = (event: any) => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: acceptFunc,
            reject: () => {}
        });
    };

    const acceptFunc = async () => {
        if (!savedDataForEdit.current) return alert('Por favor seleccione un modulo');
        if (!moduleIdSelected) return alert('Por favor seleccione un modulo');

        await cases.editModule(savedDataForEdit.current).catch((err: Error) => {
            setErr({
                status: true,
                msg: err.message
            });
        });
    };
    const handlerEditModule = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const dataFromForm = Object.fromEntries(new FormData(evt.target as HTMLFormElement));
        const bodyData: ModuleEntity = { id: moduleIdSelected, name: String(dataFromForm['name']), description: String(dataFromForm['name']), moduleStartDate: String(dataFromForm['date']) };
        savedDataForEdit.current = bodyData;
    };

    //! LEONEL This could  be make a reutilizable function because this is used on the three module pages. That is the reason because of i put this inside the component searchModules, but a i can put this on other site. (continue below)
    //! to the component searchModule will be reusable.  You can search in the project the name "handlerModuleSearch" and you can see the number repetitions
    const handlerModuleSearch = async ({ value }: { value: string }) => {
        if (!value) return;
        const response = await cases.searchModules(value).catch((err: Error) =>
            setErr({
                msg: err.message,
                status: true
            })
        );
        if (response && setModulesSearched) setModulesSearched(response.data);
    };

    return (
        <div className="w-10 flex flex-column justify-content-center align-items-center my-0 mx-auto gap-5">
            <form className="mt-6 flex flex-column w-8 gap-3" onSubmit={handlerEditModule}>
                <div className="flex flex-row justify-content-between align-items-center">
                    <h4>{dictionary.EditModule}</h4>
                    <SwitchOnOff />
                </div>
                <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                    <InputPrimary title={dictionary.NameOfModule} placeHolder={dictionary.PholderNameModule} />
                    <DateInitial />
                </div>
                <div className="flex w-full flex-column gap-2 ">
                    <label className="text-600 text-sm">{dictionary.Description}</label>
                    <InputTextarea required={false} placeholder={dictionary.ObjectiveOfTheModule} rows={5} cols={30} className="max-w-full border-round-xl border-none bg-bluegray-900" />
                </div>
                <div className="flex justify-content-between align-items-center">
                    <SearchModule onSearch={handlerModuleSearch} />
                    <Button type="submit" onClick={confirm} label={dictionary.Edit} icon="pi pi-pencil" iconPos="right" className="h-full w-2 ml-6 border-round-xl p-3" />
                </div>
            </form>
            <DataTableModules moduleList={modulesSearched} getIdModuleSelected={setModuleIdSelected} />
            <ConfirmDialog />
        </div>
    );
}
