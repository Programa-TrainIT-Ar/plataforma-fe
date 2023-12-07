'use client';
import styles from './styles/styles.module.scss';
import FormCreateModule from './components/FormCreateModule';
import DataTableModules from './components/DataTableModules';

const CreateModule = () => {
    return (
        <div className={styles.container}>
            <FormCreateModule />
            <DataTableModules />
        </div>
    );
};

export default CreateModule;
