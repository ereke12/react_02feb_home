import { ChangeEvent } from "react";
import './TextField.scss'

type Props = {
    value: string;
    type: string;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const TextField: React.FC<Props> = ({...inputProps}) => {
    return ( 
        <div className="TextField">
          <input {...inputProps} />
        </div>
    );
};