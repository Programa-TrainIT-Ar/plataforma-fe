
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SearchModule() {
    return (
        <div className="flex flex-wrap justify-content-center">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className=' border-round-3xl' />
            </span>
        </div>
    )
}
        