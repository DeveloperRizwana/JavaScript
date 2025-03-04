'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, ' 🔄 Subtitution'],
  [47, '⚽ GOAL'],
  [61, ' 🔄 Subtitution'],
  [64, '🟨 Yellow Card'],
  [69, '🔴 Red Card'],
  [70, ' 🔄 Subtitution'],
  [72, ' 🔄 Subtitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow Card'],
]);

const events = new Map(Object.keys(gameEvents));
console.log(new Set(gameEvents));
console.log(events);

for (const [key, value] of gameEvents) {
  if (key === 64) gameEvents.delete('Yellow Card');
}

console.log(gameEvents);
