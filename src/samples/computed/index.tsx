import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import * as React from "react";
import { State } from './data';

interface Props {
    state: State;
}
const View = observer(({ state }: Props) => {
    return (
        <div>
            <h3>Computed and conditional autorun sample</h3>

            <b>a:</b> {state.a}
            <button onClick={state.incrementA}>Increment</button>
            <br />

            <b>b:</b> {state.b}
            <button onClick={state.incrementB}>Increment</button>
            <br />

            <b>c:</b> {state.c}
            <button onClick={state.incrementC}>Increment</button>
            <br />


            <b>sum:</b> {state.sum}
            <br />
            <b>b * 2:</b> {state.bTimes2}
        </div>
    )
});

const state = new State();


autorun(() => {
    console.log("autorun executed");
    if (state.a == 10) {
        alert("a == 10");
    }

    if (state.a == 11 && state.c == 10) {
        alert("a == 10 && c == 10");
    }
});


export const ComputedSample = () => <View state={state} />