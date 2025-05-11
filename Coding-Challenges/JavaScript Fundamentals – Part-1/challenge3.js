// Dolphin's data 
let a = 96, b = 108, c = 89;
const scoreDolphins = (a+b+c) / 3;
console.log(scoreDolphins);

// Koalas's data 
let x = 88, y = 91, z = 210;
// let x = 96, y = 108, z = 89;
const scoreKoalas = (x+y+z) / 3;
console.log(scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}