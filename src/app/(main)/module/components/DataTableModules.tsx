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
                        <>
                            <Button type="button" icon="pi pi-eye" iconPos="right" className="border-round-xl p-2" severity="info" />
                            <Button type="button" icon="pi pi-pencil" iconPos="right" className="ml-2 border-round-xl p-2" severity="success" />
                            <Button type="button" icon="pi pi-trash" iconPos="right" className="ml-2 border-round-xl p-2" severity="danger" onClick={() => confirm('Seguro/a quiere eliminar el módulo?')} />
                        </>
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
        <div className="">
            <DataTable value={dataForRender} selectionMode="single" onRowSelect={onRowSelect} tableStyle={{ minWidth: '50rem' }} className="bg-white">
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
