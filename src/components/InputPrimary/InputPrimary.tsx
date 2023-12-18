import { InputText } from 'primereact/inputtext';
import { useAppSelector } from '../../redux/hooks/hooks';

interface Props {
    size: 'small' | 'medium' | 'large';
    title?: string;
    outline?: boolean;
    placeHolder?: string;
}

export const InputPrimary = ({ title, placeHolder }: Props) => {
    return (
        <div className="w-full flex flex-column gap-2">
            <label className="text-600 text-sm">{title}</label>
            <InputText required name="name" type="text" placeholder={placeHolder} className={`border-round-xl border-none bg-bluegray-900`} />
        </div>
    );
};
