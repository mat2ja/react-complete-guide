import { nanoid } from 'nanoid';

const DUMMY_EXPENSES = [
  {
    id: nanoid(),
    title: 'OnePlus 7 Pro',
    amount: 760,
    date: new Date(2019, 6, 21),
  },
  {
    id: nanoid(),
    title: 'Ledger Nano S',
    amount: 100,
    date: new Date(2019, 9, 10),
  },
  {
    id: nanoid(),
    title: 'Sony Bravia TV',
    amount: 1799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: nanoid(),
    title: 'HAK Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: nanoid(),
    title: 'Ikea Markus',
    amount: 180,
    date: new Date(2021, 5, 12),
  },
  {
    id: nanoid(),
    title: 'Macbook Air M1',
    amount: 1399,
    date: new Date(2021, 4, 5),
  },
  {
    id: nanoid(),
    title: 'Kobo Libra',
    amount: 220,
    date: new Date(2021, 11, 26),
  },
  {
    id: nanoid(),
    title: 'Cryptotag Thor',
    amount: 350,
    date: new Date(2022, 2, 10),
  },
  {
    id: nanoid(),
    title: 'Lamborghini Urus',
    amount: 250000,
    date: new Date(2022, 6, 12),
  },
];

export default DUMMY_EXPENSES;
