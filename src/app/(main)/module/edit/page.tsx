'use client'
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import DateInitial from '../components/DateInitial';
import { InputTextarea } from 'primereact/inputtextarea';
import SearchModule from '../components/SearchModule';
import { Button } from 'primereact/button';
import DataTableModules from '../components/DataTableModules';
import { InputSwitch } from 'primereact/inputswitch';
import SwitchOnOff from '../../../../components/SwitchOnOff/SwitchOnOff';

export default function EditModule() {
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;

  return (
    <div className="w-10 flex flex-column justify-content-center align-items-center my-0 mx-auto gap-5">
        <form className="mt-6 flex flex-column w-8 gap-3">
           <div className='flex flex-row justify-content-between align-items-center'>
                <h4>{dictionary.EditModule}</h4>
                <SwitchOnOff/>
           </div>
            <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                <InputPrimary size="large" title={dictionary.NameOfModule} placeHolder={dictionary.PholderNameModule} />
                <DateInitial />
            </div>
            <div className="flex w-full flex-column gap-2 ">
                <label className="text-600 text-sm">{dictionary.Description}</label>
                <InputTextarea placeholder={dictionary.ObjectiveOfTheModule} rows={5} cols={30} className="max-w-full border-round-xl border-none bg-bluegray-900" />
            </div>
            <div className="flex justify-content-between align-items-center">
                <SearchModule />
                <Button label={dictionary.Edit} icon="pi pi-pencil" iconPos="right" className="h-full w-2 ml-6 border-round-xl p-3" />
            </div>
        </form>
        <DataTableModules />
    </div>
  )
}
