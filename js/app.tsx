/** Fetch and Promises */
//for typescript
declare var fetch;
fetch('http://localhost:3010/widgets')
    .then(res => res.json())
    .then(results => {console.log(results);})
    .catch(err => {console.error(err)});
//window.fetch()

// /** spread operator */
// const num = [1,2,3,4,5];
// const doIt = (a,b,c,d,e) => {
//     console.log(a,b,c,d,e);
// }

// doIt(...num);

/** Object / String Destructuring  */
// const person = {
//     firstname: "Sue",
//     lastname: "Lucas"
// }

// // const {firstname, lastname } = person;
// const {firstname: fn, lastname: ln } = person;
// console.log(fn);
// console.log(ln);

// const colors = ['red', 'orange', 'blue', 'pink'];
// const [firstFav, secondFav, ...otherColors] = colors;
// console.log(firstFav, otherColors);

// const doIt = (a,b,...c) => {
//     console.log(c);
// }

// doIt(1,3,5,6,7,8);


/** Initializing Params */
// const doIt = (a, b, c) => {
//     console.log(a,b,c);
// }
// doIt(1,2,3);
// const doItAgain = (a=1, b=10, c=20) => { //initialize
//     console.log(a,b,c);
// }
// doItAgain();

// const doIt = () => {
//     console.log('Did it!');
// }
// doIt();

// const doItAgain = () => 'Did it again';
// console.log(doItAgain());

/** Copy Object */
// const person = {
//     firstname: "Sue",
//     lastname: "Lucas"
// };

// const newPerson = Object.assign({}, person, { age: 16 });
// console.dir(person);
// console.dir(newPerson);
// console.dir(person === newPerson);

/*--- Don't mutate array! ---*/

// const colors = ['red', 'orange', 'blue'];
// var moreColors = colors.concat('yellow');
// const newColors = colors.slice(1);

// console.dir(colors);
// console.dir(moreColors);
// console.dir(newColors);
//colors.push('pink'); push mutas original array