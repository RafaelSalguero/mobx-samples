import { action, computed, observable } from 'mobx';
import { obtenerCustomer } from './api';

export class State {
    @observable
    valor = {
        a: {
            value: 5
        }
    };

    @observable
    customer  = { name: ""};

    @observable
    b: number = 2;

    
    @action
    incrementar = () => {
        this.valor.a.value++;;
    }

    @computed
    get valorTimes2() {
        return this.valor.a.value;
    }

    cargarCustomer = async () => {
        const customer = await obtenerCustomer();
        this.customer = customer;
    }
}