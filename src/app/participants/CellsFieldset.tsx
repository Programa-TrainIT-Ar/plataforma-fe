'use client';

import React, { use } from 'react';
import { Fieldset } from 'primereact/fieldset';
import Cell from '@/types/cell';
import CellService from '@/services/CellService';

const CellsFieldset: React.FC<{ cell: String }> = ({ cell }) => {
  const cells = use<Cell[] | undefined>(CellService.getCells());
  const cellParticipant = cells?.find((c) => (c.name === cell));

  return (
    <Fieldset toggleable legend={cell} collapsed >
      <ul className="list-none p-0 m-0">
        <li><b>Module: </b>{cellParticipant?.module}</li>
        <li><b>Project: </b>{cellParticipant?.project}</li>
        <li><b>Edition: </b>{cellParticipant?.edition}</li>
      </ul>
    </Fieldset>
  )
};

export default CellsFieldset;
