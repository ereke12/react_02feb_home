import React from "react";
import { FormControl } from "../ui/formControl/FormControl";
import styles from '../userName/UserName.module.scss';

type Props = {
    currentFirstname: string;
    onFirstnameChange: (v: string) => void;
    onNextClick: () => void;
}
export const FirstName: React.FC<Props> = ({currentFirstname, onFirstnameChange, onNextClick}) => {
    return (
    <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>Enter your firstName</h2>
        <FormControl type="text" label={'FirstName'} placeholder="Enter your FirstName" value={currentFirstname} onChange={onFirstnameChange} />
        <button type="button" onClick={onNextClick}>Continue</button>
    </div>
    );
};