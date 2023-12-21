import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
        

export const dataTest = [
    {
        codigo: 123,
        nombre: 'sistemas',
        // Las opciones se enseñaran dependiendo del usuario, este es solo un bosquejo del objeto
        opciones: (
            <>
                <Button type="button" icon="pi pi-eye" iconPos="right" className="border-round-xl p-2" severity="info" />
                <Button type="button" icon="pi pi-pencil" iconPos="right" className="ml-2 border-round-xl p-2" severity="success" />
                
            </>
        )
    }
];

export default function DataTableModules(getModuleSelected?: any) {

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

    return (
        <div className="">
            <DataTable value={dataTest} tableStyle={{ minWidth: '50rem' }}>
                <Column field="codigo" header="Código" />
                <Column field="nombre" header="Nombre" />
                <Column field="opciones" header="Opciones" />
            </DataTable>
            
            <Button type="button" icon="pi pi-trash" iconPos="right" className="ml-2 border-round-xl p-2" severity="danger" onClick={confirm} />
            <ConfirmDialog />
        </div>
    );
}
