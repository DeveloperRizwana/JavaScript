'use strict';

const books = [
  'Atomic Habits',
  'Think and Grow Rich ',
  'You Can Win',
  'Dare to Lead',
  'You Can Win',
];
// Problem -> 1.1
// const [firstBook, secondBook] = books; // first two books

// Problem -> 1.2
const [firstBook, , secondBook] = books; // first & third books
console.log(firstBook, secondBook);

// Problem -> 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// Problem -> 1.4
const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
