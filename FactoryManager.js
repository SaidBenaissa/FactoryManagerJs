function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "Tester";
}


// Factory Manager design pattern

function EmployeeFactory(){
    this.create = (name,type) =>{
    switch(type){
        case 1:
            return new Developer(name);
            break;
        
        case 2:
            return new Tester(name);
            break;
    }
}
}

function say(){
    console.log("I'm "+this.name+" and i'm a "+this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Said",1));
employees.push(employeeFactory.create("Hicham",2));
employees.forEach( emp =>{
    say.call(emp);
});
