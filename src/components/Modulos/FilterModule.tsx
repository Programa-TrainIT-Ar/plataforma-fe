

import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

export default function FilterDemo() {
    const [globalFilter, setGlobalFilter] = useState<string>('');

    // useEffect(() => {
    //     NodeService.getTreeTableNodes().then((data) => setNodes(data));
    // }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-start">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className=" bg-transparent">
            <TreeTable className=' bg-transparent flex flex-column justify-content-center'  globalFilter={globalFilter} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column field="Acciones" header="Acciones"></Column>
                <Column field="Módulo" header="Módulo"></Column>
                <Column field="Creación" header="Creación"></Column>
                <Column field="Inicio" header="Inicio"></Column>
                <Column field="Creador" header="Creador"></Column>
                <Column field="Estado" header="Estado"></Column>
            </TreeTable>
        </div>
    )
}
        