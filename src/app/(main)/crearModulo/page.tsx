'use client';
import styles from './styles/styles.module.scss';
import ItemModule from './components/ItemModule';
import FilterModule from './components/FilterModule';

const CrearModules = () => {
    return (
        <div className={styles.container}>
            <ItemModule />
            <FilterModule />
        </div>
    );
};

export default CrearModules;
