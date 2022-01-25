interface Employee{
    firstName : string,
    lastName : string,
    salary? : number,
    getSalary() : number;
}


class Manager implements Employee{}

class Agent extends Employee {

    public amountOfEmployees : number = 0;

    constructor(
        firstName : string,
        lastName : string,
        readonly moneyPerEmployee: number
    ) {
        super(firstName, lastName, moneyPerEmployee);
    }

    public getSalary(): number {
        return this.amountOfEmployees * this.moneyPerEmployee - this.amountOfEmployees * this.moneyPerEmployee * 0.13;
    }
}

class Workman extends Employee {

    public workingHours : number = 0;

    constructor(
        firstName : string,
        lastName : string,
        readonly moneyPerHour: number 
    ) {
        super(firstName, lastName, moneyPerHour);
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
