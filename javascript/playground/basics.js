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

// const list = [23,3,5,3,2,4,6,76]

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

// const students = [
//     {
//         marks: 45,
//         name: 'Asad Shah',
//         gpa: 3.7,
//         isPass: true,
//         friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
//         address: {
//             city: 'Mardan',
//             country: 'Pakistan',
//             thesil: 'Katlang'
//         }
//     },
//     {
//         marks: 55,
//         name: 'Anis',
//         gpa: 3.2,
//         isPass: true,
//         friends: ['Boy 1', 'Boy 2', 'Girl 1'],
//         address: {
//             city: 'Khyber',
//             country: 'Pakistan',
//             thesil: 'Warsak Road'
//         }
//     },
//     {
//         marks: 22,
//         name: 'Insha Ullah',
//         gpa: 2.0,
//         isPass: false,
//         friends: ['Kaleem', 'Kashif', 'Asad'],
//         address: {
//             city: 'D.I Khan',
//             country: 'Pakistan',
//             thesil: 'Nishta Road'
//         }
//     }
// ]


// const data = {
//     products: [
//         {
//             name:"Laptop",
//             price: 1000,
//             isAvailable: true
//         },
//         {
//             name:"Mobile",
//             price: 500,
//             isAvailable: false
//         },
//         {
//             name:"TV",
//             price: 2000,
//             isAvailable: false
//         },
//         {
//             name:"Fridge",
//             price: 3000,
//             isAvailable: true
//         }

//     ]
// }

// const products = data.products;

// for(let i=0; i<products.length; i++){
//     console.log(products[i].name);
// }

// const obj = {
//     name: 'Abdus Samad',
//     age: 23,
//     isPass: true,
//     friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
//     address: {
//         city: 'Mardan',
//     }
// }
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

// const marks = [45, 33, 20, 77, 80, 95, 40, 55, 30, 22]
// const remain = [60,77];

// const sum = marks
//     .sort((a, b) => a - b)
//     .filter((n) => n > 50)
//     .map((n) => n + 10)
//     .reduce((a, b) => a + b, 0);

    // push
    // // pop
    // const l = marks.indexOf(45)
    // console.log(l)
    // if(l === -1 ){
    //     marks.push(100)
    // }

    // console.log(sum)

//    const full = marks.concat(remain);
//    console.log(full)

//    list = [10,10,10,45,66,77,88]

//    list.fill(10,0,10)
//     list.some(10)


// const names = ["Nadeem", "Tauheed", "Abdul Samad", "Abdul Qadir"];

// const [stu1,,,name2] = names;


// console.log(name2)

// const student_list = {
//     name: 'Abdus Samad',
//     age: 23,
//     marks: 30,
//     isPass: true,
//     friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
//     address: {
//         city: 'Mardan',
//         village: 'Katlang'
//     }
// }

// changeMarks(student_list);

// const changeMarks = ({marks, address}) => {

//     obj.marks = 50

// }


// const str1 = "Hello";
// const str2 = " World";
// const str = "My country is Pakistan."
// const str3 = str1.concat(str2)
// const str3 = str1 + str2;
// const str4 = `${str1} ${str2}`;

// const l = str.indexOf("test");
// console.log(l)
// const l2 = str.replace("new", "old");
// console.log(l2)

// const key = "Pakistan"
// const country = str.slice(str.indexOf(key),str.indexOf(key) + key.length)
// console.log(country)

// const string = "1, Faizan, Laki Marwat, 3.5, 6th, ICP"

// const [id, name, address, gpa, semester, institue] = string.split(",");

// const name = " Faizan"

// const trim = name.trim();

// Array
    // forEach
    // map
    // filter
    // reduce
    // indexOf
    // Sort
    // Slice
    // Push/Pop
    // Concat
    // Fill, Some, Every


// Strings
    // trim, slice, concat, substring, split, indexOf, 
    // length, replace, upper, lower

// Array, object Destructoring

// const list = new Set([1,2,3,4,5,6])
// list.add(4)

// Default Parameter/Argument
// const fun = (name = "Guest") => {
//     console.log(`Hello ${name}`)
// }

// fun();

// Regular Expressions
// const str = "Mansur"

// const t = str.search(/[a-z]/i)

// console.log(t)

// // System.out.println("Hello \"my\" World");`


// const list = [1,2,4,5,76]

// const list2 = [44,55,66,...list, 77]

// console.log(list2)

// const obj1 = {
//     name: 'Abdus Samad',
//     age: 23,
//     marks: 30
// }

// const obj2 = {
//     ...obj1,
//     gpa: 3.2,
//     semester: 6
// }

// const sum = (a,b,c,d,e,f) => {
//     console.log(a + b);
// }


// const values = [10,20,2,3,4,5]


// sum(values[0],values[1])

// const count = (a,b, ...c) => {
//     console.log(a + b);
//     const s = c.reduce((a,b) => a + b, 0)
//     console.log(s)
// }

// count(40,50,40,04,3,2,1,3,4)

// const myName = "Ali";
// let t = [...myName]

// console.log(t)


const fname = "Ali";
const lname = "Khan";
const age = 23;
const gender = 'Male';
const city = "Peshawar";
const village = "Pawakay";
const houseNo = 30;

const data = {
    fname,
    lname,
    age,
    gender,
    address: {
        city,
        village,
        houseNo
    }
}
console.log(data)