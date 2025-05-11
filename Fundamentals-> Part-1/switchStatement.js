const day = 'thursday';
switch(day){
    case 'monday': // strict operator
        console.log('Plan to learn English');
        console.log('Plan to practice dsa everyday');
        break;
    case 'tuesday':
        console.log("Do exercise everyday");
        break;
    case 'wednesday':
        console.log("Go to college");
        break;
    default:
        console.log('Not a valid day!');   
}

// task 
if(day === 'tuesday') {
    console.log("Do exercise everyday");
} else if(day == 'monday'){
    console.log('Plan to learn English');
} else {
    console.log('Not a valid day!');   
}