
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { ModulesService } from '../../service/ModulesService';

export default function FilterModule() {

    return (
        <div className="">
                <DataTable  tableStyle={{ minWidth: '50rem' }}>
                    <Column  field="code" header="code"></Column>
                    <Column field="name" header="name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
        </div>
    );
}
