import * as React from "react";
import * as ReactDOM from "react-dom";
import style from "./style.module.css";

export const App = () => (
    <div className={style.label}>
        Hello world
    </div>
)
ReactDOM.render(<App />, document.getElementById("root"));