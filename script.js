
// Q1: Create a function that takes an array of numbers
// and returns a new array where each number is squared.
// Use map method.

const numbersQ1 = [2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log(squareNumbers(numbersQ1));


// Q2: Write a function that takes an array of objects
// with name and age properties. Filter out only the
// users whose age is greater than 18.

const usersQ2 = [
    { name: "Ali", age: 20 },
    { name: "Ahmed", age: 16 },
    { name: "Sara", age: 22 },
    { name: "Ayesha", age: 15 }
];

function adultUsers(arr) {
    return arr.filter(user => user.age > 18);
}

console.log(adultUsers(usersQ2));


// Q3: Given an array of products with price,
// use reduce to calculate the total price of all products.

const productsQ3 = [
    { name: "Watch", price: 5000 },
    { name: "Shoes", price: 3000 },
    { name: "Bag", price: 2000 }
];

const totalPrice = productsQ3.reduce(
    (total, product) => total + product.price, 0
);

console.log(totalPrice);


// Q4: Create an array of students with marks.
// Sort the array in descending order based on marks.

const studentsQ4 = [
    { name: "Ali", marks: 75 },
    { name: "Sara", marks: 90 },
    { name: "Ahmed", marks: 60 },
    { name: "Ayesha", marks: 85 }
];

studentsQ4.sort((a, b) => b.marks - a.marks);

console.log(studentsQ4);


// Q5: Write a function that takes an array of strings
// and finds the first string with length greater than 5
// using find method.

const wordsQ5 = ["Cat", "Apple", "Banana", "Orange"];

function findWord(arr) {
    return arr.find(word => word.length > 5);
}

console.log(findWord(wordsQ5));


// Q6: Create an object named person with properties
// firstName, lastName and a method fullName that returns
// the full name using this keyword.

const personQ6 = {
    firstName: "Ali",
    lastName: "Khan",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(personQ6.fullName());

// Explanation:
// this keyword refers to the current person object.
// It accesses firstName and lastName properties.


// Q7: Show the difference between regular function
// and arrow function when using this inside an object.

const personQ7 = {
    firstName: "Ali",

    regularFunction: function() {
        return this.firstName;
    },

    arrowFunction: () => {
        return this.firstName;
    }
};

console.log(personQ7.regularFunction());
console.log(personQ7.arrowFunction());

// Explanation:
// Regular function has its own this.
// Arrow function does not have its own this.
// It uses this from its surrounding scope.


// Q8: Filter even numbers, double them using map,
// and return their sum using reduce.
// Do it in a chain.

function calculateNumbers(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((total, num) => total + num, 0);
}

const numbersQ8 = [1, 2, 3, 4, 5, 6];

console.log(calculateNumbers(numbersQ8));


// Q9: Create an array of employees with name,
// department and salary.

// a) Find an employee who works in HR department.

// b) Sort employees by salary in ascending order.

const employeesQ9 = [
    { name: "Ali", department: "IT", salary: 50000 },
    { name: "Sara", department: "HR", salary: 40000 },
    { name: "Ahmed", department: "Finance", salary: 60000 },
    { name: "Ayesha", department: "HR", salary: 45000 }
];

// Part A: Find HR employee

const hrEmployee = employeesQ9.find(
    employee => employee.department === "HR"
);

console.log(hrEmployee);

// Part B: Sort employees by salary

const sortedEmployees = [...employeesQ9].sort(
    (a, b) => a.salary - b.salary
);

console.log(sortedEmployees);


// Q10: Write a function that takes an object and returns
// an array of its keys and values separately.
// Then create a new object from an array of key-value pairs.
// Use Object.keys, Object.values and Object.fromEntries.

const personQ10 = {
    name: "Ali",
    age: 20,
    city: "Karachi"
};

function getObjectData(obj) {
    return {
        keys: Object.keys(obj),
        values: Object.values(obj)
    };
}

console.log(getObjectData(personQ10));

// Create a new object using Object.fromEntries

const entriesQ10 = [
    ["name", "Sara"],
    ["age", 22],
    ["city", "Lahore"]
];

const newObject = Object.fromEntries(entriesQ10);

console.log(newObject);
