'use strict';

const game = {
  team1: 'Rizwana Perween',
  team2: 'Nusrat Jahan',
  players: [
    [
      'Harmanpreet Singh',
      'PR Sreejesh',
      'Manpreet Singh',
      'Vivek Sagar Prasad',
      'Mandeep Singh',
      'Lalit Kumar Upadhyay',
      'Sumit',
      'Nilakanta Sharma',
      'Shamsher Singh',
      'Jarmanpreet Singh',
      'Krishan Pathak',
    ],
    [
      'Savita Punia',
      'Rani Rampal',
      'Neha Goyal',
      'Vandana Katariya',
      'Gurjit Kaur',
      'Deep Grace Ekka',
      'Nikki Pradhan',
      'Navneet Kaur',
      'Salima Tete',
      'Monika Malik',
      'Udita Duhan',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Feb 21st 2025',
  odds: {
    team1: 12.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Challenge-1
// Problem-1
const [player1, player2] = game.players;
console.log(player1, player2);

// Problem-2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// Problem-3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Problem-4
const players1Final = [...player1, 'Aahish', 'Aatif', 'Ahad', 'Asad'];
console.log(players1Final);

// Problem-5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Problem-6
const priontGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

priontGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Rizu');
priontGoals('Davies', 'Muller');
priontGoals(...game.scored);

// Problem-7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Challenge-2
// problem-1
// For arrays
for (const [i, value] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${value}`);
}

// For Object
// for(const [i, value] of Object.entries(game.scored))
//   console.log(`Goal ${i+1}: ${value}`);

// problem-2
const values = Object.values(game.odds);
let sum = 0,
  average = 0;
for (const i of values) {
  sum += i;
}
console.log(values);
average = sum / values.length;
console.log('Average:' + average);

// problem-3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'drwa' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
