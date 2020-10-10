// // can do the following but not good practice 💩
// // const person: {
// //     name: string;
// //     age: number;
// // } = {
// //     name: 'Max',
// //     age: 2
// // };

// // this is much better 😉
// // const person= {
   
// //     name: 'Max',
// //     age: 2,
// //     hobbies: ['sports', 'cooking'],
// // };

// enum Role { ADMIN, AUTHOR, BOSS}

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: {}
//     // role: [number, string];
// } = {

//     name: 'Max',
//     age: 2,
//     hobbies: ['sports', 'cooking'],
//     // role: [2, 'author']  //tuple
//     role: Role.ADMIN
// };

// person.role = [0, 'admin']

// let favoriteActivities: string[]; // can also use 'any' type but not great
// favoriteActivities = ['walking', 'reading']

// console.log(person.name)

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase())
// }

// // object type: has key: type instead of key: value

//union types 📗
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2; 
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(1, 2);;
console.log(combinedAges);
const combinedNames = combine('John ', 'Doe')
console.log(combinedNames)