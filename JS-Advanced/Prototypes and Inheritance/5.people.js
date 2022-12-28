function solution(){
    class Employee{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work(){
            let current = this.tasks.shift();
            console.log(current);
            this.tasks.push(current);
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name,age);
            this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name,age);
            this.tasks = [`${this.name} is working on a complicated task.`,
             `${this.name} is taking time off work.`, `${this.name} is supervising junior workers.`];
        }
    }
    class Manager extends Employee{
        constructor(name, age){
            super(name,age);
            this.dividend = 0;
            this.tasks = [`${this.name} scheduled a meeting.`,
             `${this.name} is preparing a quarterly report.`]
        }

         getSalary(){
            return super.getSalary() + this.dividend;
        }
    }

    return {Manager, Junior, Senior, Employee};
}

const classes = solution ();

const junior =

new classes.Junior('Ivan',25);

junior.work();

junior.work();
junior.salary = 5811;

junior.collectSalary();
const sinior = new classes.Senior('Alex', 31);
 sinior.work();
 sinior.work(); 
 sinior.work(); 
 sinior.work(); 
 sinior.salary = 12050; 
 sinior.collectSalary(); 
 const manager = new classes.Manager('Tom', 55); 
 manager.salary = 15000; 
 manager.collectSalary(); 
 manager.dividend = 2500; 
 manager.collectSalary();