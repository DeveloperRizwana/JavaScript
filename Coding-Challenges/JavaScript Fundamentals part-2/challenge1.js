const calcAverage = (scoreA, scoreB, scoreC) => (scoreA+scoreB+scoreC)/3;

// test 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins,avgKoalas) {

    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphin win (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
       console.log(`No team wins...`);
    }
};
checkWinner(scoreDolphins,scoreKoalas);

// test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);

