// find even odd usinf forEach
// problem is it can not stop loop by break or return 

const Numbers = [1,2,3,4,5,6,7,8,90,100,200,330,400,500,606,603];
let sum = 0;
const names =["zara","sara","lira","kira","mira","nira"];
const Uppercase = []
// Numbers.forEach(num => {
//     if(num%2===0){
//         return console.log(`${num}-is even`);
//     }
//     else{
//         return console.log(`${num}-is odd`);
//     }
// })
// Pro version
Numbers.forEach(num=> {
    const type = num%2===0?"even":"odd";
    console.log(`${num}- is ${type}`);
})

// let's sum of numbers

Numbers.forEach(num => {
   sum += num;
});
console.log(`Total sum is ${sum}`);

// uppercase all names 
names.forEach(name => {
    Uppercase.push(name.toUpperCase());
});

console.log(Uppercase);

const MapLowerCase = Uppercase.map(name=> name.toLowerCase());
console.log(MapLowerCase,"Using Map");



// Filter keeps item if condition is true
const numbers = [1,2,3,4,5,6,7,8,22,11,24]
const result =numbers.filter(num=>num>8);
console.log(result)


// find first one 
const firstOne = numbers.find(num=>num>10)
console.log(firstOne)
// reduce 
const sum2 = numbers.reduce((acc,curr)=> acc+curr,0);
console.log(sum2, "Sum of numbers")
// const emptyArr = []
// const useInit = emptyArr.reduce((acc,curr)=> acc+curr,0)
// console.log("useInit",useInit)
// const noInit = emptyArr.reduce((acc,curr)=> acc+curr)
// console.log(noInit,"No init gives error")