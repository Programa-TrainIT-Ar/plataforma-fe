
'use client'
import React, { useState, useEffect } from 'react';
import { ProductService } from '../../../../../src/demo/service/ProductService';
import { DataView } from 'primereact/dataview';
import { Card } from 'primereact/card';
import Link from 'next/link'
import { useSearchParams } from "next/navigation";


export default function Modules() {
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();
  const id = searchParams.get("id") - 1;
  console.log(id);

  useEffect(() => {
    ProductService.getModules().then((data) => setProducts(data));
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
              console.log(cell);
              return (
                <>
                  <Card className="p-card" title={`${cell.name}`} key={i} subTitle={`${cell.lider}`} ></Card>
                </>
              )
            })}

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <DataView value={products.slice(id, id + 1)} itemTemplate={itemTemplate} />
    </div>
  );

}
