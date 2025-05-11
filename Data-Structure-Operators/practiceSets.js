'use strict';
// Problem-1
const array = [1, 2, 2, 3, 4, 4, 5];
// Expected output: [1, 2, 3, 4, 5]
console.log([...new Set(array)]);

// Problem-2
const array1 = new Set([1, 2, 3, 4, 5]);
const array2 = new Set([4, 5, 6, 7, 8]);
// Expected output: [4, 5]

const common = array1.intersection(array2);
console.log('Common in both Arrays:', common);
console.log([...common]);

// Problem-3
const a1 = new Set([1, 2, 3, 4, 5, 2, 3, 4]);
const a2 = new Set([4, 4, 5, 6, 5, 6, 7, 8]);
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
const union = a1.union(a2);
console.log('Union of two array:', union);

// Problem-4
const arr1 = new Set([1, 2, 3, 4, 5]);
const arr2 = new Set([4, 5, 6, 7, 8]);
// Expected output: [1, 2, 3]

const diff = arr1.difference(arr2);
console.log([...diff]);

function findCommon(arr1, arr2) {
  // Your code here
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const union2 = set1.union(set2);

  const int = set1.intersection(set2);
  return [int, union2];
}

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));
