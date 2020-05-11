import findBy from '../find_by';

test('вернет один элемент массива', () => {
  const finder = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];
  expect(results).toEqual(expected);
});

test('вернет три элемента массива', () => {
  const finder = findBy('type', 'attack');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'удар', type: 'attack', description: 'Атака оружием' },
    { name: 'стрельба из лука', type: 'attack', description: 'Атака оружием' },
  ].filter(finder);
  const expected = [
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'удар', type: 'attack', description: 'Атака оружием' },
    { name: 'стрельба из лука', type: 'attack', description: 'Атака оружием' },
  ];
  expect(results).toEqual(expected);
});

test('вернет пустой массив', () => {
  const finder = findBy('name', 'mistake');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  const expected = [];
  expect(results).toEqual(expected);
});

test('вернет пустой массив', () => {
  const finder = findBy('health', '100');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  const expected = [];
  expect(results).toEqual(expected);
});
