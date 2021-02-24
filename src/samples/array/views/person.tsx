import { observer } from 'mobx-react';
import * as React from "react";
import { Person } from '../data';

interface Props {
    value: Person;
}
export const PersonView = observer(({ value }: Props) => {
    const changeAge = () => value.age = 20 + Math.round(Math.random() * 10);
    return (
        <li>
            <b>Type:</b> {value.type}
            <br />
            <b>Name:</b> {value.name}, <b>age:</b> {value.age}
            <br />
            <button onClick={changeAge}>Change age</button>
        </li>
    );
});