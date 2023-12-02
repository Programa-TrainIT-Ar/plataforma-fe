import { InputTextarea } from 'primereact/inputtextarea';

interface Props {
    size: 'small' | 'medium' | 'large';
    title?: string;
    outline?: boolean;
    color?: string;
    placeholder?: string;
}

export const TextArea = ({ size, title, color, outline, placeholder }: Props) => {
    return (
        <>
            <label className="">{title}</label>
            <InputTextarea className=" border-round-2xl" placeholder={placeholder} rows={5} cols={30} />
        </>
    );
};
