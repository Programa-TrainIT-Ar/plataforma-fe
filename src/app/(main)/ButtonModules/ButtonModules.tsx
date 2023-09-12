'use client'
import React, { useState, useEffect } from 'react';
import { ProductService } from '../../../../src/demo/service/ProductService';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';

export default function ButtonModules() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      ProductService.getCellModules().then((data) => setProducts(data));
  }, []);      

  const itemTemplate = ( data ) => {
      return (
        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
          <Button className="p-button-icon-only pl-5 pr-5 m-1">{data.name}</Button>
        </div>
      );
  };
  return (
    <div className="p-card ">
      <h6>Celulas :</h6>
        <DataView value={products} itemTemplate={itemTemplate} />
    </div>
)
}