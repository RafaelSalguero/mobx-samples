import { observer } from 'mobx-react';
import * as React from 'react'
import { delay } from '../../tools';
import { State } from './state'



interface Props {
    viewmodel: State;
}
const EjemploBasicoView = observer((props: Props) => {
    React.useEffect(() => {
        props.viewmodel.cargarCustomer();
        console.log("UseEffect");
    }, []);

    return (
        <div>
            Hello: {props.viewmodel.customer.name || "Cargando..."}
        </div>
    )
});


const state = new State();
setInterval(() => {
    state.incrementar();
    console.log(state.valor);
}, 1000);

export const EjemploBasico = () => {
    const OtroComp = (props: any) => <EjemploBasicoView key={""} viewmodel={state} />;

    return <OtroComp />
} ;