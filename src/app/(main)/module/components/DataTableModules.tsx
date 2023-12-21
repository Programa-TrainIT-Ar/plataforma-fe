import { DataTable, DataTableSelectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ModuleEntity } from '../architecture/domain/entity';

interface Props {
    getIdModuleSelected?: (idModuleSelected: string) => void;
    moduleList?: ModuleEntity[];
}

export default function DataTableModules({ moduleList, getIdModuleSelected }: Props) {
    const dataForRender =
        (moduleList &&
            moduleList.map((module) => {
                return {
                    ...module,
                    options: (
                        <div className="flex justify-content-center gap-1 ">
                            <Button type="button" icon="pi pi-eye" className="" style={{ backgroundColor: '#00000000' }} />
                            <Button type="button" icon="pi pi-pencil" className="" style={{ backgroundColor: '#00000000' }} />
                            <Button type="button" icon="pi pi-trash" className="" onClick={() => confirm('Seguro/a quiere eliminar el módulo?')} style={{ backgroundColor: '#00000000' }} />
                        </div>
                    )
                };
            })) ||
        [];

    const onRowSelect = (event: DataTableSelectEvent) => {
        const condition = event.data['id'];
        if (typeof condition === 'string' && getIdModuleSelected) {
            getIdModuleSelected(condition);
        }
    };

    return (
        <div className="w-8">
            <DataTable value={dataForRender} selectionMode="single" onRowSelect={onRowSelect} tableStyle={{ width: '100%', backgroundColor: 'gray' }}>
                <Column field="options" header="Actions" align="center" />
                <Column field="id" header="Id" hidden align="center" />
                <Column field="name" header="Módule" align="center" />
                <Column field="created" header="Created" align="center" />
                <Column field="moduleStartDate" header="Init Date" align="center" />
                <Column field="status" header="Status" align="center" />
            </DataTable>
        </div>
    );
}
