import { factory, primaryKey } from '@mswjs/data';

const fruits = ['Apple', 'Bannana', 'Plum'];

export const db = factory({
  fruit: {
    id: primaryKey(String),
    name: fruits[Math.floor(Math.random() * fruits.length)],
    price: Math.random() * 100,
  },
});
