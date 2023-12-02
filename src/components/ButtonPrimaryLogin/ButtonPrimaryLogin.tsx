import { Button } from 'primereact/button';
interface Props {
    onclick: (params: any) => void;
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'pink' | 'black' | 'white' | 'grey' | 'brown' | 'aqua' | 'lime' | 'navy' | 'teal' | 'fuch ';
    icon: string;
    title: string;
    outline?: boolean;
}

export const ButtonLogin = ({ onclick, title, size, color, icon, outline = false }: Props) => {
    return <Button label={title} color={color} className=" border-round-3xl" />;
};
