interface IContactList {
  id: number;
  initial: string;
  users: {
    id: number;
    name: string;
  }[];
}

export const contactLists: IContactList[] = [
  {
    id: 1,
    initial: 'A',
    users: [
      {
        id: 1,
        name: 'Albert Rodarte',
      },
      {
        id: 2,
        name: 'Allison Etter',
      },
    ],
  },
  {
    id: 2,
    initial: 'C',
    users: [
      {
        id: 1,
        name: 'Craig Smiley',
      },
    ],
  },
  {
    id: 3,
    initial: 'D',
    users: [
      {
        id: 1,
        name: 'Daniel Clay',
      },
      {
        id: 2,
        name: 'Doris Brown',
      },
    ],
  },
  {
    id: 4,
    initial: 'I',
    users: [
      {
        id: 1,
        name: 'Iris Wells',
      },
    ],
  },
];
