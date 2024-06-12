'use client'

import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export interface Participant {
    firstName: string;
    lastName: string;
    cells: Array<String>
}

const ParticipantsTable = ({ participants }: any) => {
    const op = useRef<OverlayPanel>(null);
    const [selectedParticipant, setSelectedParticipant] = useState<Participant>({
        firstName: "",
        lastName: "",
        cells: [""]
    });

    const showOverlayPanel = (e: any, rowData: Participant) => {
        setSelectedParticipant(rowData);
        op.current?.toggle(e);
    };

    return (
        <div className='w-full'>
            <DataTable value={participants} size='small' paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '30rem' }}>
                <Column field="firstName" sortable header="First Name" />
                <Column field="lastName" sortable header="Last Name" />
                <Column header="Full Name" sortable
                    body={(rowData) => (
                        <p>{rowData.firstName+' '+rowData.lastName}</p>
                    )}
                />
                <Column
                header="Cell"
                    body={(rowData) => (
                        <Button onClick={(e) => showOverlayPanel(e, rowData)} icon="pi pi-info-circle" iconPos='right' rounded label="" />
                    )}
                />
            </DataTable>

            <OverlayPanel ref={op} >
                <ul>
                    {selectedParticipant?.cells?.map((cell, index) => (
                        <li key={index}>{cell}</li>
                    ))}
                </ul>
            </OverlayPanel>
        </div>
    )
}

export default ParticipantsTable