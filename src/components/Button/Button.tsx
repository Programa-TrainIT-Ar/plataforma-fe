import React from 'react'
interface Props {
  onclick: (params:any) => void;
  color: "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "pink" | "black" | "white" | "grey" | "brown" | "aqua" | "lime" | "navy" | "teal" | "fuch ";
  icon: string;
  outline?: boolean;
}

export const Button = ({onclick, color="purple", icon, outline=false}: Props) => {
  return (
    <div>B</div>
  )
}

export const Button1 = ({onclick, color, icon}: Props) => {

  const save = (n:number) => {}

  return (
    <div>
      <Button color='red' icon='url' onclick={save}/>
    </div>
  )
}
