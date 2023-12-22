'use client';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import DateInitial from '../components/DateInitial';
import { InputTextarea } from 'primereact/inputtextarea';
import SearchModule from '../components/SearchModule';
import { Button } from 'primereact/button';
import DataTableModules from '../components/DataTableModules';
import React,{ FormEvent, useState } from 'react';
import { ModuleEntity } from '../architecture/domain/entity';
import { useCasesHook } from '../architecture/interactionHook/useCasesHook';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'; 


export default function EditModule() {
    const cases = useCasesHook();
    
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;
    const [modulesSearched, setModulesSearched] = useState<ModuleEntity[]>();
    const [moduleIdSelected, setModuleIdSelected] = useState<string>();
    
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
        if(!moduleIdSelected) return alert("Por favor seleccione un modulo");
        await cases.deleteModule(moduleIdSelected).catch((err:Error) => setErr({
            status:true,
            msg:err.message
        }));
    }

    const dispatchDialog = async (evt:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        confirm("")
    }

    
    return (
        <div className="w-10 flex flex-column justify-content-center align-items-center my-0 mx-auto gap-5">
            <form className="mt-6 flex flex-column w-8 gap-3">
                <div className="flex flex-row justify-content-between align-items-center">
                    <h4>{dictionary.DeleteModule}</h4>
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
                    <SearchModule getModulesSearched={setModulesSearched} />
                    <Button label={dictionary.Edit} icon="pi pi-pencil" iconPos="right" style={{backgroundColor:"#00000000"}} className="h-full w-2 ml-6 border-solid border-primary border-round-xl border-3   p-3" />
                    <Button onClick={dispatchDialog} label={dictionary.Delete} icon="pi pi-trash" iconPos="right" className="h-full w-3 ml-4 border-round-xl p-3 border-solid border-primary border-round-xl border-3" />
                </div>
            </form>
            <DataTableModules moduleList={modulesSearched} getIdModuleSelected={setModuleIdSelected} />
            <ConfirmDialog/>
        </div>
    );
}