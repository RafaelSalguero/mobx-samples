import { action, computed, observable, transaction } from 'mobx';
import { delay } from '../../tools';

export class State {
    @observable
    debt: number = 0;

    @observable
    account: number = 0;


    @action
    borrow = () => {
        const amount = 100;

        this.debt += amount;
        this.account += amount;
    }

    @action
    borrowAsync = async () => {
        const amount = 100;

        await delay(500);
        this.debt += amount;

        await delay(500);
        this.account += amount;
    }

    @action
    borrowAsyncT = async () => {
        await transaction(async () => {
            const amount = 100;

            await delay(500);
            this.debt += amount;

            await delay(500);
            this.account += amount;
        });
    }

    borrowBad = () => {
        const amount = 100;
        this.debt += amount;
        this.account += amount;
    }

    @action
    repay = async () => {
        const amount = 100;
        this.debt -= amount;
        this.account -= amount;
    }

    @computed
    get balance() {
        return this.account - this.debt;
    }

}