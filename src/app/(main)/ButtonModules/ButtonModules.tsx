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
        <Button className="cellButton  m-1">{data.name}</Button>
      );
  };
  return (
    <div className="p-2">
      <h6>Celulas :</h6>
        <DataView className='cardModule-cell_button' value={products} itemTemplate={itemTemplate} />
    </div>
)
}