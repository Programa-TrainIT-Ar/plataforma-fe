import { InputText } from 'primereact/inputtext'
import React from 'react'

interface Props {
  size: "small" | "medium" | "large";
  header?: string;
  outline?: boolean;
}

export const Input = ({size, header}:Props) => {
  return (
    <div className='col-5 flex flex-column m-2'>
          <label>{header}</label>
          <InputText type="text" />
      </div>
  )
}
