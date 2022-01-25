class Employee{
    constructor(
        readonly firstName : string,
        readonly lastName : string,
        protected salary : number
    ) {}

    public getSalary() : number {
        return this.salary - this.salary * 0.13;
    };
}


class Manager extends Employee{}

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
        this.salary = this.salary * this.amountOfEmployees;
        return this.salary - this.salary * 0.13;
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
        this.salary = this.salary * this.workingHours;
        return  this.salary - this.salary * 0.13;
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
