import React from "react";
import { FormControl } from "../ui/formControl/FormControl";
import styles from '../userName/UserName.module.scss';

type Props = {
    currentLastname: string;
    onLastnameChange: (v: string) => void;
    onNextClick: () => void;
}
export const LastName: React.FC<Props> = ({currentLastname, onLastnameChange, onNextClick}) => {
    return (
    <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>Enter your lastName</h2>
        <FormControl type="text" label={'LastName'} placeholder="Enter your FirstName" value={currentLastname} onChange={onLastnameChange} />
        <button type="button" onClick={onNextClick}>Continue</button>
    </div>
    );
};