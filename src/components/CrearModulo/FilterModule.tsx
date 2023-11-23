
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ModulesService } from '../../demo/service/ModulesService';

export default function FilterModule() {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ModulesService.getModules();
                setModules(data);
            } catch (error) {
                console.error('Error fetching modules:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="">
                <DataTable value={modules} tableStyle={{ minWidth: '50rem' }}>
                    <Column  field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
        </div>
    );
}



// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';

// export default function BasicDemo() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         ProductService.getProductsMini().then(data => setProducts(data));
//     }, []);

//     return (
//         <div className="card">
//             <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
//                 <Column field="code" header="Code"></Column>
//                 <Column field="name" header="Name"></Column>
//                 <Column field="category" header="Category"></Column>
//                 <Column field="quantity" header="Quantity"></Column>
//             </DataTable>
//         </div>
//     );
// }
        
        