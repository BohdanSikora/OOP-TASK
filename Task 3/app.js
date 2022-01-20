class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        this.salary = this.dayRate * this.workingDays;
        console.log(this.fullName + ' salary: ' + this.salary);
    }
    showSalaryWithExperience() {
        this.salary = this.dayRate * this.workingDays * this.exp;
        console.log(this.fullName + ' salary: ' + this.salary);
    }
     get showExp () {
        return this.exp;
    }
     set setExp (value) {
        this.exp = value;
    }
}
const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
worker1.setExp = 1.2;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();

let employees = [];
employees.push(worker1,worker2,worker3) 
employees.sort(function(a ,b) {
    return a.salary - b.salary
})

let result = []
for (let i = 0; i<employees.length; i++) {
    result[i] = employees[i].fullName + ': ' + employees[i].salary
}
console.log('Sorted salary:' +'\n'+ result[0]+'\n' + result[1] +'\n' + result[2])