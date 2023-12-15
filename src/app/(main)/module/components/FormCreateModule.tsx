import DateInitial from './DateInitial';
import SearchModule from './SearchModule';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import { Button } from 'primereact/button';
import { useAppSelector } from '../../../../redux/hooks/hooks';

const FormCreateModule = () => {
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;
    return (
        <form className="mt-6 flex flex-column w-8 gap-3">
            <h4>{dictionary.CreateModule}</h4>
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
                <Button label={dictionary.Create} icon="pi pi-plus" iconPos="right" className="h-full w-2 ml-6 border-round-xl p-3" />
            </div>
        </form>
    );
};

export default FormCreateModule;
