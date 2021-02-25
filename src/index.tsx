import * as React from "react";
import * as ReactDOM from "react-dom";
import { ArraySample } from './samples/array';
import { EjemploBasico } from './samples/basic';
import { ComputedSample } from './samples/computed';
import { TransactionSample } from './samples/transactions';
import style from "./style.module.css";

export const App = () => (
    <div className={style.label}>
        <ArraySample />
        <hr />
        <ComputedSample />
        <hr />

        <TransactionSample />
    </div>
)
ReactDOM.render(<App />, document.getElementById("root"));