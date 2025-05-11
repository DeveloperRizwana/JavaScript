const bill = 40;

const tip = bill * (15/100);
const totalBill = bill + tip;

const tip2 = bill * (20/100);
const totalBill2 = bill + tip2;

bill >= 50 && bill <= 300 ?  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalBill}`):
console.log(`The bill was ${bill}, the tip was ${tip2}, and the total value is ${totalBill2}`);


// if(bill >= 50 && bill <= 300) {
//     const tip = bill * (15/100);
//     const totalBill = bill + tip;
    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalBill}`);

// } else {
//     const tip1 = bill * (20/100);
//     const totalValue = bill + tip1;
//     console.log(`The bill was ${bill}, the tip was ${tip1}, and the total value is ${totalValue}`);
// }