import { observable } from 'mobx';

export interface Person {
    name: string;
    age: number;
    type: "class" | "viewmodel" | "plain object" | "observable object";
}

export class PersonViewModel implements Person {
    @observable 
    name: string = "";

    @observable
    age: number = 0;

    type = "viewmodel" as const;
}

export class PersonClass implements Person {
    name: string = "";
    age: number = 0;
    type = "class" as const;
}

export class Lista {
    personas: PersonClass[] = [];
}
