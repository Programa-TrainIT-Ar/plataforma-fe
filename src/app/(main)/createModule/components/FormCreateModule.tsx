import DateInitial from './DateInitial';
import SearchModule from './SearchModule';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import { Button } from 'primereact/button';

const FormCreateModule = () => {
    return (
        <form className="col-8 ">
            <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                <InputPrimary size="large" title="Nombre del Modulo" color="bg-rose-200" />
                <DateInitial />
            </div>
            <div className="flex w-full flex-column   ">
                <label className="">Descripción</label>
                <InputTextarea placeholder="Objetivo del Módulo" rows={5} cols={30} />
            </div>
            <div className="flex justify-content-around p-2">
                <SearchModule />
                <Button label="" />
            </div>
        </form>
    );
};

export default FormCreateModule;
