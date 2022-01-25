//EASY

function run(){
    return "running"
}
console.log("Todays exercise:" + run()); 

function swim(){
    return "swimming"
}
console.log("Todays exercise:" + swim()); 

//Medium 
// prints "Each person gets 4.00 slices of pizza"

// var sharePizzaMat = cutPizzaSlices / peoplePerPizza
var cutPizzaSlices= 8;
function sharePizza(x) {
    return "Each person gets " + 8/(x) + " slices of pizza"
};
console.log(sharePizza(2)); 
console.log(sharePizza(3));


//hard   
let ssn= Symbol();
let person= (function(){
   class person{
       constructor(name){
           this.name= 'giselle Guevara';
           this[ssn]=123456789;
       }  
       }
       return person;
   } )();
  console.log(person);

  //very hard 

  class person1{
    constructor(name, job, age){
        this.name= name,
        this.job= job,
        this.age= age,
        this.exercise= "running is not fun";
    }
    console.log(this.exercise);
    sayName(){
        console.log(`${this.name}`);
        console.log(`${this.name} is a  back-end developer at ${this.job}`);
        this.exercise="running is not fun";
    }
}
const person1 = new person1("Giselle", "R2H", "24");

Giselle.sayName();

