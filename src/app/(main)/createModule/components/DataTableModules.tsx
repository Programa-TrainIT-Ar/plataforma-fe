import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableModules() {
    return (
        <div className="">
            <DataTable tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="code"></Column>
                <Column field="name" header="name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
