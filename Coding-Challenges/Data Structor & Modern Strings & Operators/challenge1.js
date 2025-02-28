'use strict';

const game = {
  team1: 'Rizwana',
  team2: 'Nusrat',
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
