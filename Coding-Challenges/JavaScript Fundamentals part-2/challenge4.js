const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

  for(let i = 0; i < bills.length; i++){
    //   console.log(`The Tips are ${calcTip(bills[i])}, and the totalValues are ${bills[i] + calcTip(bills[i])}`);

    totals.push(bills[i] + calcTip(bills[i]));
    tips.push(calcTip(bills[i]));
  }

  console.log(totals);
  console.log(tips);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));