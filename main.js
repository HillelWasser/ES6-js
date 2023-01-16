//Ex1
 const square = (num) => {
return num*num;
}
console.log(square(3))

//Ex2

 const isPositive = (num) => {
if (num > 0) {
    return 'true';
}
else {
    return 'false';
}
}

console.log(isPositive(-3));


//Ex3

 const formatName = (x,y,z=" ") => {
return x + z + y;
}
console.log(formatName('hillel','wasserman'))

//Ex 4
const greet = (name,boolean) => {
    if(boolean==='true') {
        return `Good evening,${name}`;
    }
    else if (boolean==='false') {
         return `Hi ${name}`;
    }
    else {
        return 'problem';
    }
}
console.log(greet('hillel','dgdg'))
//Ex5

const calculate = (num1,num2,math) => {
    switch(math) {
        case '+':
           return num1+num2;
           
        case '-':
           return num1-num2;
            
        case '*':
          return  num1*num2;
            
        case '/':
          return  num1/num2;
            
    }

}
console.log(calculate(2,3,'*'));



//Ex6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"]
const togther = [...team,...captain];
console.log(togther);


//Ex9


//Ex10


//Ex11
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];


   //Ex12

   const sortDescending = (array) => {
    let newArray = array.sort(function(a,b){return b-a});
    console.log(newArray);
   }
   sortDescending([0,100,30,50,40]);


//Ex13
class person {
    constructor(name,age) {
    this.sayHello = `Hello,my name is ${name} and i am ${age} years old`
    return this.sayHello;
    }
} 
let personOne = new person ('jon',33);
let personTwo = new person ('roy', 44);
console.log(personOne);
console.log(personTwo);
