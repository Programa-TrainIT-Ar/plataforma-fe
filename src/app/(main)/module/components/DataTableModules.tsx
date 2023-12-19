import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export const dataTest = [
    {
        codigo: 123,
        nombre: 'sistemas',
        // Las opciones se enseñaran dependiendo del usuario, este es solo un bosquejo del objeto
        opciones: (
            <>
                <Button type="button" icon="pi pi-eye" iconPos="right" className="border-round-xl p-2" severity="info" />
                <Button type="button" icon="pi pi-pencil" iconPos="right" className="ml-2 border-round-xl p-2" severity="success" />
                <Button type="button" icon="pi pi-trash" iconPos="right" className="ml-2 border-round-xl p-2" severity="danger" onClick={() => confirm("Seguro/a quiere eliminar el módulo?") } />
            </>
        )
    }
];

export default function DataTableModules(getModuleSelected?: any) {
    return (
        <div className="">
            <DataTable value={dataTest} tableStyle={{ minWidth: '50rem' }}>
                <Column field="codigo" header="Código" />
                <Column field="nombre" header="Nombre" />
                <Column field="opciones" header="Opciones" />
            </DataTable>
        </div>
    );
}
