// const password = prompt("please enter a password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD!");
// } else {
//     console.log("INVALID PASSWORD!");
// }

// const firstName = prompt("");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN")
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// const seatingChart = [
//     ['kristen', 'erik', 'namita'],
//     ['geoffrey', 'jeonita', 'antonio', 'kelvin'],
//     ['yuma', 'sakura', 'jack', 'erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i];
//     console.log(`ROW  $${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// let input = prompt('hey! say something');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') break;
// }

// // console.log('ok you win');

// function repeat(str, numTimes){
//     let result= '';
// for (let i=0; i<numTimes; i++){
//     result += str;
// }
// console.log(result);
// }
//  Number.forEach(function(element){

//  })

// arrow function

// const add = (x, y) => {
//     return x + y;
// }

// const rollDie = () => ( 
//     Math.floor(Math.random() * 6) + 1
// )

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// console.log('Hello');
// setTimeout(() => {
//     console.log("Are you still there?");
// }, 3000)

// console.log('Good bye');

// score.every(score=>score>75)

const total = prices.reduce((total, price) => total + price);

const allPets= [...Cats, ...dogs]