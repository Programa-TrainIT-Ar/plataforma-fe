'use client'

import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CellsModal from './CellsModal';

export interface Participant {
    firstName: string;
    lastName: string;
    email: string;
    cells: Array<String>
}

export interface Cell {
    name: string,
    description: string,
    module: string,
    project: string,
    edition: string,
}

const ParticipantsTable: React.FC<{participants: Participant[], cells: Cell[]}> = ({participants, cells}) => {
    const op = useRef<OverlayPanel>(null);
    const [selectedParticipant, setSelectedParticipant] = useState<Participant>({
        firstName: "",
        lastName: "",
        email: "",
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
                <Column field="email" sortable header="Email" />
                <Column
                    header="Cell"
                    body={(rowData: Participant) => (
                        <Button
                            onClick={(e) => showOverlayPanel(e, rowData)}
                            icon="pi pi-info-circle"
                            iconPos='right'
                            label={rowData.cells.length > 1 ? ` ${rowData.cells.length} Cells` : ` ${rowData.cells.length} Cell`}
                            rounded
                        />
                    )}
                />
            </DataTable>

            <OverlayPanel ref={op} closeOnEscape className='p-0'>
                <CellsModal participant={selectedParticipant} cells={cells}/>
            </OverlayPanel>
        </div>
    )
}

export default ParticipantsTable