
'use client'
import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Card } from 'primereact/card';
import { useSearchParams } from "next/navigation";
import { ModulesService } from '../../../../demo/service/ModulesService';

export default function Module() {
  const [cellmodules, setCellModules] = useState([]);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    ModulesService.getModules().then((data) => setCellModules(data));
  }, []);

  const itemTemplate = (data) => {
    return (
      <div className='cardmodule col-12'>
        <div className="cardmodule-text flex flex-column xl:flex-row xl:align-items-start gap-4">
          <div className='flex flex-column col-4 align-items-center justify-content-between'>
            <h2>{data.name}</h2>
            <p>{data.edition}</p>
            <p className="m-0">
              {data.description}
            </p>
          </div>
          <div className='flex flex-wrap col-7 gap-1 justify-content-end'>
            {data.cells.map((cell, i) => {
              return (
                  <Card className="p-card" title={`${cell.name}`} key={i} subTitle={`${cell.lider}`} ></Card>
              )
            })}

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <DataView value={cellmodules.slice(id, id + 1)} itemTemplate={itemTemplate} />
    </div>
  );

}
