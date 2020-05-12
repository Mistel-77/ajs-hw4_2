import findBy from './findBy';

const finder1 = findBy('type', 'attack');
const results1 = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'удар', type: 'attack', description: 'Атака оружием' },
  { name: 'стрельба из лука', type: 'attack', description: 'Атака оружием' },
].filter(finder1);
console.log(results1);

const finder2 = findBy('name', 'урон');
const results2 = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder2);

console.log(results2);

const finder3 = findBy('name', 'mistake');
const results3 = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder3);

console.log(results3);
