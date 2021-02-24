import * as React from "react";
import * as ReactDOM from "react-dom";
import { ArraySample } from './samples/array';
import style from "./style.module.css";

export const App = () => (
    <div className={style.label}>
        <ArraySample />
    </div>
)
ReactDOM.render(<App />, document.getElementById("root"));