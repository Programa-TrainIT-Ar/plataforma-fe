
'use client'
import React, { useState, useEffect } from 'react';
import { ModulesService } from '../../service/ModulesService';
import { DataView } from 'primereact/dataview';
import ButtonModules from '../../../components/ButtonModules/ButtonModules';
import Link from 'next/link'
import { useRouter } from "next/navigation";

import { Image } from 'primereact/image';
        
export default function Modules() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ModulesService.getModules().then((data) => setProducts(data));
        console.log(products);
    }, []); 



    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <Image className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${data.image}`} alt={data.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <Link href={{
                                pathname: `/modules/${data.name}`,
                                query : data,
                                }} className="text-2xl font-bold text-900">{data.name}</Link>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <span className="font-semibold">{data.description}</span>
                                </span>
                            </div>
                            <div><h5 className="font-semibold">{data.edition}</h5></div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end sm:gap-2">
                            <ButtonModules modules={data}/>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={products} itemTemplate={itemTemplate} />
        </div>
    )
}
        