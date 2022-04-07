// Variables
// Var, Let, Const

// Conditions

// const temp = 46;

// if(temp > 45){
//     console.log('It is too hot outside');
// }
// else if(temp > 35){
//     console.log('It is pretty nice outside');
// }

// if(marks >= 33) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }    
    
// // conditionals -- Ternary Operator
// (marks >= 33 ? console.log('pass') : console.log('fail'))

// Switch

// const name = "Abdus Samad"

// switch(name) {
    
// }

// Template Literals

// const firstName = 'Abdus';
// const lastName = 'Samad';

// console.log("Hello " + firstName + " " + lastName);
// console.log(`Hello ${firstName} ${lastName}`);

// const n = 10;

// console.log(`This is a line ${n*10}`)


// Loops
// For, While, Do While

const list = [23,3,5,3,2,4,6,76]

// for(let i=0;i < list.length; i++){
//     console.log(list[i]);
// }

// let j = 0;
// while(j < list.length) {
//     console.log(list[j]);
//     j++;
// }
// while( file != EOF()) {
//     line = file.readline();
//     if(line.startsWith('From')) {
//         words = line.split();
//         print(words[2]);
//     }
// }


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i > 10);

// Object
// const data = {
//     marks: 45,
//     name: 'Asad Shah',
//     gpa: 3.7,
//     isPass: true,
//     friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
//     address: {
//         city: 'Mardan',
//         country: 'Pakistan',
//         thesil: 'Katlang'
//     }
// }

const students = [
    {
        marks: 45,
        name: 'Asad Shah',
        gpa: 3.7,
        isPass: true,
        friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
        address: {
            city: 'Mardan',
            country: 'Pakistan',
            thesil: 'Katlang'
        }
    },
    {
        marks: 55,
        name: 'Anis',
        gpa: 3.2,
        isPass: true,
        friends: ['Boy 1', 'Boy 2', 'Girl 1'],
        address: {
            city: 'Khyber',
            country: 'Pakistan',
            thesil: 'Warsak Road'
        }
    },
    {
        marks: 22,
        name: 'Insha Ullah',
        gpa: 2.0,
        isPass: false,
        friends: ['Kaleem', 'Kashif', 'Asad'],
        address: {
            city: 'D.I Khan',
            country: 'Pakistan',
            thesil: 'Nishta Road'
        }
    }
]


const data = {
    products: [
        {
            name:"Laptop",
            price: 1000,
            isAvailable: true
        },
        {
            name:"Mobile",
            price: 500,
            isAvailable: false
        },
        {
            name:"TV",
            price: 2000,
            isAvailable: false
        },
        {
            name:"Fridge",
            price: 3000,
            isAvailable: true
        }

    ]
}

const products = data.products;

// for(let i=0; i<products.length; i++){
//     console.log(products[i].name);
// }

const obj = {
    name: 'Abdus Samad',
    age: 23,
    isPass: true,
    friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
    address: {
        city: 'Mardan',
    }
}
// console.log(Object.keys(obj));
// for(let key in obj){
//     console.log(key);
// }


// const marks = [2,35,2,4,6,3,6,3,654,3,32]

// for(let i=0;i<marks.length;i++) {
//     console.log(marks[i])
// }

// marks.forEach(function (n) {
//     console.log(n)
// })

// marks.forEach((n, i) => {
//         console.log(`Value ${n} Index${i}`);
//     })

// Map
// const square = marks.map((n) => n > 30 ? n * n : n);

// console.log(square)
// Filter

// const fail = marks.filter((n) => n < 30);

// let below = [];

// for(let i = 0; i<marks.length; i++) {
//     if(marks[i] < 30) {
//         below.push(marks[i]);
//     }
// }

// Reduce
// const sum = marks.reduce(((a, b) => a + b), 0);

// console.log(sum)

// Find

// Fill

// sort

const marks = [45, 33, 20, 77, 80, 95, 40, 55, 30, 22]


const sum = marks
    .sort((a, b) => a - b)
    .filter((n) => n > 50)
    .map((n) => n + 10)
    .reduce((a, b) => a + b, 0);

    console.log(sum)