import { action, autorun, observable } from 'mobx';
import { delay } from '../../../tools';
import { Person, PersonClass, PersonViewModel } from './person';
export type { Person } from "./person" ;

export class State {
    @observable
    customers: Person[] = [];

    @action
    addPerson = () => {
        console.log(this.customers);
        //The mobx substitution for "push" method adds the element to the array and 
        //inform all observers of a new item        

        //Plain objects are converted to observable objects by mobx
        
        const plainObject: Person = {
            type: "plain object",
            name: "Frida",
            age: 21
        };

        console.log(plainObject);
        this.customers.push(plainObject);
        //Counterintuitively, this returns false:
        console.log(this.customers[this.customers.length - 1] === plainObject);

        console.log(this.customers[this.customers.length - 1]);
        
        this.customers.push(observable({
            type: "observable object",
            name: "Diego",
            age: 25
        }));

        //Only objects, arrays and sets are recursively converted by mobX, classes are leaved as-is:
        const vm = new PersonViewModel();
        vm.name = "Wassily Kandinsky";
        vm.age = 32;
        this.customers.push(vm)

        const cl = new PersonClass();
        cl.name = "Jackson Pollock";
        cl.age = 27;
        this.customers.push(cl);

        //In both of these cases, the instance is preserved, unlike with plain objects:
        console.log(this.customers[this.customers.length - 2] === vm);
        console.log(this.customers[this.customers.length - 1] === cl);
    }

    createArray = (): Person[] => {

        //Only objects, arrays and sets are recursively converted by mobX, classes are leaved as-is:
        const vm = new PersonViewModel();
        vm.name = "Johannes Vermeer";
        vm.age = 23;

        const cl = new PersonClass();
        cl.name = "Gustav Klimt";
        cl.age = 20;

       return  [
            {
                name: "Claude Monet",
                age: 46,
                type: "plain object"
            },  observable({
                name: "Vincent Van Gogh",
                age: 32,
                type: "observable object"
            }), 
            vm,
            cl
        ];
    }

    @action
    changeArray = () => {
        const origArray = this.createArray();
        this.customers = origArray;

        console.log(this.customers === origArray);

        console.log([... this.customers]);
    }

}
