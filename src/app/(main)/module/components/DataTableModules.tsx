import { DataTable, DataTableSelectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { ModuleEntity } from '../architecture/domain/entity';

interface Props {
    getIdModuleSelected?: (idModuleSelected: string) => void;
    moduleList?: ModuleEntity[];
}

export default function DataTableModules({ moduleList, getIdModuleSelected }: Props) {
      
      const confirm = (event: any) => {
        confirmDialog({
            trigger: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => acceptFunc(),
            reject: () => rejectFunc()
        });
    };

    const acceptFunc = () => {
        // se hace el borrado del módulo
    }

    const rejectFunc = () => {
        return;
    }
      
      
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
            <ConfirmDialog />
        </div>
    );
}
