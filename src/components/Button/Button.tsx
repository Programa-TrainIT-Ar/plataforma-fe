import React from 'react'
import { Button } from 'primereact/button';
interface Props {
  onclick: (params:any) => void;
  size: "small" | "medium" | "large";
  color: "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "pink" | "black" | "white" | "grey" | "brown" | "aqua" | "lime" | "navy" | "teal" | "fuch ";
  icon: string;
  header: string;
  outline?: boolean;
}

export const ButtonPrimary = ({onclick, header, size, color, icon, outline=false}: Props) => {
  return (
    <Button label={header} color={color}/>
  )
}

// export const Button1 = ({onclick, color, size, icon, header}: Props) => {

//   const save = (n:number) => {}

//   return (
//     <div>
//       <Button label={header} color={color} icon='url' onclick={save}/>
//     </div>
//   )
//   }