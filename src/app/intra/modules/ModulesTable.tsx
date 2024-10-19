'use client'

import Modulo from "@/types/modulo";
import Proyectos from "@/types/proyecto";
import { OverlayPanel } from "primereact/overlaypanel";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import React, { useRef, useState } from "react";

const ModulesTable: React.FC<{ modules: Modulo[], proyects: Proyectos[] }> = ({ modules, proyects }) => {
    const op = useRef<OverlayPanel>(null);
    const [selectedModule, setSelectedModule] = useState<Modulo | undefined>();
    const [selectedProject, setSelectedProject] = useState<Proyectos | null>(null);

    const showOverlayPanel = (e: any, rowData: Modulo) => {
        setSelectedModule(rowData);
        op.current?.toggle(e);
    };

    const actionTemplate = (rowData: Modulo) => {
        return (
            <button 
                type="button" 
                onClick={(e) => showOverlayPanel(e, rowData)}
                className="p-button p-component"
            >
                Ver Proyectos
            </button>
        );
    };

    return (
        <div>
            <DataTable value={modules} responsiveLayout="scroll">
                <Column field="nombre" header="Nombre del Módulo"></Column>
                <Column body={actionTemplate} header="Acciones"></Column>
            </DataTable>

            <OverlayPanel ref={op} dismissable>
                {selectedModule && (
                    <div>
                        <h3>{selectedModule.name}</h3>
                        <Dropdown 
                            value={selectedProject} 
                            options={proyects.filter(p => p.id === selectedModule.id)}
                            onChange={(e) => setSelectedProject(e.value)}
                            optionLabel="nombre" // Campo que muestra el nombre del proyecto
                            placeholder="Seleccionar un Proyecto"
                        />
                    </div>
                )}
            </OverlayPanel>
        </div>
    );
}

export default ModulesTable;