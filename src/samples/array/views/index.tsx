import * as React from "react";
import { observer } from 'mobx-react';
import { Person } from '../data';
import { PersonView } from './person';

interface Props {
    value?: Person[];
}
export const List = observer(({value} : Props) =>
    <ul>
        {value?.map((x, i) => <PersonView key={i} value={x} />)}
    </ul>
);