interface IGroupList {
  id: number;
  name: string;
  status: string;
  newMessage: number;
}

export const groupList: IGroupList[] = [
  { id: 1, name: 'General', status: 'new', newMessage: 10 },
  { id: 2, name: 'Reporting', status: 'old', newMessage: 20 },
  { id: 3, name: 'Designer', status: 'new', newMessage: 0 },
  { id: 4, name: 'Developers', status: 'old', newMessage: 0 },
  { id: 5, name: 'Project-alpha', status: 'new', newMessage: 0 },
  { id: 6, name: 'Snacks', status: 'old', newMessage: 2 },
];
