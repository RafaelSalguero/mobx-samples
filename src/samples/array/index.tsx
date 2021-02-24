import { observer } from 'mobx-react';
import * as React from "react";
import { List } from './views';
import { State } from './data';

interface Props  {
    state: State;
}
const ArraySampleView = observer(( { state } : Props) => {
    return (
        <div>
            <h3>Array sample</h3>
            <h4>Initialized:</h4>
            <List value={state.customers} />
            <button onClick={state.addPerson} >Add some items</button>
            <button onClick={state.changeArray} >Change array</button>
        
         
        </div>
    )
});

const state = new State();
export const ArraySample = () => <ArraySampleView state={state} />