// let mySum = (...inputs) => {
//     let total = 0;
//     for (let input of inputs) {
//         total += input;
//     }
//     // console.log(total);
//     return total;
// }

// mySum(2, 1, 3);

import mySum  from "./modules/mySum.js";

function filterAverage(list) {
    let average = 0;
    for(let x of list) {
        average += x;
    }
    average = average / list.length;
    let filterNumbers = list.filter((x) => x >= average);
    console.log(filterNumbers);
}

function printMessage() {
    return (console.log("Goodbye"));
}

let myArr = [40, 23, 500, 24, 400];

let mySecondArr = myArr.map((x) => x * 2);

let result = mySum(...myArr);

// console.log(result);
// console.log(mySecondArr);
filterAverage(mySecondArr);

setTimeout(printMessage, 3000);

let Employee = {
    name: "Jackie",
    email: "kong123890@gmail.com",
    department: "software developer",
    startDate: "September 1, 2023"
};

let { name, email } = Employee;

let Person = { name: name, email: email };

// console.log(Person);