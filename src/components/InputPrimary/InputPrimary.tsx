import { InputText } from 'primereact/inputtext';
import { useAppSelector } from '../../redux/hooks/hooks';

interface Props {
    title?: string;
    required?: boolean;
    placeHolder?: string;
}

export const InputPrimary = ({ title, placeHolder, required = false }: Props) => {
    return (
        <div className="w-full flex flex-column gap-2">
            <label className="text-600 text-sm">{title}</label>
            <InputText required={required} name="name" type="text" placeholder={placeHolder} className={`border-round-xl border-none bg-bluegray-900`} />
        </div>
    );
};
