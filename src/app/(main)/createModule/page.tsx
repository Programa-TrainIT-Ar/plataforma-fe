'use client';
import FormCreateModule from './components/FormCreateModule';
import DataTableModules from './components/DataTableModules';

const CreateModule = () => {
    return (
        <div className="w-10 flex flex-column justify-content-center align-items-center my-0 mx-auto gap-5">
            <FormCreateModule />
            <DataTableModules />
        </div>
    );
};

export default CreateModule;
