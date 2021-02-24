import { action, computed, observable } from 'mobx';
import { checkIfStateModificationsAreAllowed } from 'mobx/lib/internal';

export class State {
    @observable
    a = 0;

    @observable
    b = 0;

    @observable
    c = 0;

    @action
    incrementA = () => this.a++;

    @action
    incrementB = () => this.b++;

    @action
    incrementC = () => this.c++;


    @computed
    get sum() {
        console.log("sum computed");
        return this.a + this.b;
    }

    @computed
    get bTimes2() {
        console.log("b times 2 computed");
        return this.b * 2;
    }
}