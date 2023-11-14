'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { ModulesService, ProductService } from '../../../service/ModulesService';
import { DataView } from 'primereact/dataview';
import { Card } from 'primereact/card';
import { Modules } from '../../../../types/modules';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Modules() {
    const [products, setProducts] = useState<Modules[]>();
    const searchParams = useSearchParams();
    const id = searchParams.get('id') - 1;


    useEffect(() => {
        ModulesService.getModules().then((data) => setProducts(data));
    }, []);

    const slicedProducts = useMemo(() => {
      return products.slice(id, id + 1);
    }, [id, products]);


    

    const itemTemplate = (data) => {
        return (
            <Card className=" w-full" title={`${data.name}`} subTitle={`${data.edition}`}>
                <p className="m-0">{data.description}</p>
                <div className="flex flex-wrap gap-4 justify-content-center my-4">
                    {data.cells.map((cell, i) => {
                       
                        return (
                            <>
                                <Card className="w-5" title={`${cell.name}`} key={i} subTitle={`${cell.lider}`}></Card>
                            </>
                        );
                    })}
                </div>
            </Card>
        );
    };

    return (
        <div className="card">
            <DataView value={slicedProducts} itemTemplate={itemTemplate} />
        </div>
    );
}
