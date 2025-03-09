'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Subtitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Subtitution'],
  [64, '🟨 Yellow Card'],
  [69, '🔴 Red Card'],
  [70, '🔄 Subtitution'],
  [72, '🔄 Subtitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow Card'],
]);

// Problem-1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Problem-2
gameEvents.delete(64);
console.log(gameEvents);

// Problem-3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Bonus Problem
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// Problem-4
for (const [min, event] of gameEvents) {
  const half = min <= gameEvents.set / 2 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
