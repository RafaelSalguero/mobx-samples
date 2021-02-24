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
            <h3>Async transactions don't work / No action sample</h3>

            <b>debt:</b> {state.debt}
            <br />

            <b>account:</b> {state.account}
            <br />

           
            <button onClick={state.borrow}>borrow</button>
            <br />
            <button onClick={state.borrowAsync}>borrow async</button>
            <br />
            <button onClick={state.borrowAsyncT}>borrow async transaction</button>
            <br />
            <button onClick={state.borrowBad}>borrow bad</button>
            <br />
            <button disabled={state.debt <= 0} onClick={state.repay}>repay</button>
            <br />

        <b>balance:</b> <span style={{
            color: state.balance != 0 ? "red" : "black"
        }} >{state.balance}</span>
        </div>
    )
});

const state = new State();

autorun(() => {
    if(state.debt != state.account) {
        console.log("Incorrect balance!");
    }
    console.log(state.debt + "-" + state.account);
});

export const TransactionSample = () => <View state={state} />