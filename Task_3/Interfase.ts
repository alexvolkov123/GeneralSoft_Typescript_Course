interface Employee{
    firstName : string,
    lastName : string,
    salary? : number,
    moneyPerEmployee? : number,

    getSalary() : number;
}


class Manager implements Employee{
    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly salary : number
    ) {}

    getSalary(): number {
        return this.salary - this.salary * 0.13;
    }
}

class Agent implements Employee {

    public amountOfEmployees : number = 0;

    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly moneyPerEmployee: number
    ) {}

    public getSalary(): number {
        return this.amountOfEmployees * this.moneyPerEmployee - this.amountOfEmployees * this.moneyPerEmployee * 0.13;
    }
}

class Workman implements Employee {

    public workingHours : number = 0;

    constructor(
        readonly firstName : string,
        readonly lastName : string,
        readonly moneyPerHour: number 
    ) {}

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
