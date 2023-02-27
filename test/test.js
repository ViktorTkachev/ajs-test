import { calculateItems } from '../src/calculate';

test('calculateItems test', () => {
  const list = [
    {
      id: 1,
      name: 'first book',
      price: 1500,
      count: 1,
    },
    {
      id: 2,
      name: 'second book',
      price: 1000,
      count: 2,
    },
  ];

  const resalt = calculateItems(list);

  expect(resalt).toBe(3500);
});

test('basic test', () => {
  const resalt = 4;
  expect(resalt).toBe(4);
});
