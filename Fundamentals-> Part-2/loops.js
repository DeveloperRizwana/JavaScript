// for loop keeps running while condition is TRUE
for(let i = 1; i<=10; i++){
    console.log(`Lifting weights repetition ${i}`);
}

const rizuArray = [
    'Rizwana',
    'Perween',
    2025-2003,
    'student',
    ['Nusrat', 'Jasmine', 'Rukhsar'],
    true,
];

const types = [];

for(let i = 0; i < rizuArray.length; i++){
    // Reading from rizuArray array
    console.log(rizuArray[i], typeof rizuArray[i]);

    // Filling types array
    // types[i] = typeof rizuArray[i];
    types.push(typeof rizuArray[i]);
}

console.log(types);

const years = [1990, 1980, 2000, 2003];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2025 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < rizuArray.length; i++){
    if(typeof rizuArray[i] !== 'string') continue;

    console.log(rizuArray[i], typeof rizuArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < rizuArray.length; i++){
    if(typeof rizuArray[i] === 'number') break;

    console.log(rizuArray[i], typeof rizuArray[i]);
}