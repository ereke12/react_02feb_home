import React from "react";
import { FormControl } from "../ui/formControl/FormControl";
import styles from './UserName.module.scss'

type Props = {
    currentUsername: string;
    onUsernameChange: (v: string) => void;
    onNextClick: () => void;
};
export const UserName: React.FC<Props> = ({currentUsername, onUsernameChange, onNextClick}) => {
    return (
    <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>Enter your userName</h2>
        <FormControl type='text' label={'Username'} placeholder="Enter your username" value={currentUsername} onChange={onUsernameChange} />
        <button type="button" onClick={onNextClick}>Continue</button>
    </div>
    );
};