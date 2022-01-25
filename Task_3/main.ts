abstract class Employee{
    abstract firstName : string;
    abstract lastName : string;
    abstract getSalary() : number;
}


class Manager extends Employee{
    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly salary : number
    ){
        super();
    }

    public getSalary(): number {
        return this.salary - this.salary * 0.13;
    }
}
class Agent extends Employee {

    public amountOfEmployees : number = 0;

    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly moneyPerEmployee: number
    ) {
        super()
    }

    public getSalary(): number {
        return this.amountOfEmployees * this.moneyPerEmployee - this.amountOfEmployees * this.moneyPerEmployee * 0.13;
    }
}

class Workman extends Employee {

    public workingHours : number = 0;

    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly moneyPerHour: number 
    ) {
        super()
    }

    public getSalary(): number {
        return this.workingHours * this.moneyPerHour - this.workingHours * this.moneyPerHour * 0.13;
    }
}



const showSalary = (employee : Employee) : void => {
    console.log(`${employee.firstName} ${employee.lastName} has salary: \$${employee.getSalary()}`);
}

const sam = new Manager('Sam', 'Winchester', 1600);
const din = new Agent('Din', 'Winchester', 110);
const bob = new Workman('Bob', 'Singer', 6);

din.amountOfEmployees = 8;
bob.workingHours = 174;

showSalary(sam);
showSalary(din);
showSalary(bob);
