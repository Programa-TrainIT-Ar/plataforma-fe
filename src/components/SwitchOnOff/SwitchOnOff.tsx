
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

//!this is not implemented that correctly way
export default function SwitchOnOff() {
    const [checked, setChecked] = useState(false);
    const dictionary = useAppSelector(state => state.reducerLanguage).dictionary

    return (
        <div className="flex flex-column justify-content-center align-items-center">
            
            <InputSwitch checked={checked} onChange={(e) => setChecked(!checked)} />
            <br />
            <p>{dictionary.EnableDisable}</p>
        </div>
    );
}
        