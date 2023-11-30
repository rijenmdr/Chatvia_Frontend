import { BiUser } from 'react-icons/bi';
import { RiMessage2Line, RiContactsLine, RiSettings3Line } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';

export const menuOne = [
  {
    id: 1,
    label: 'Profile',
    icon: BiUser,
  },
  {
    id: 2,
    label: 'Chats',
    icon: RiMessage2Line,
  },
  {
    id: 3,
    label: 'Groups',
    icon: HiOutlineUserGroup,
  },
  {
    id: 4,
    label: 'Contacts',
    icon: RiContactsLine,
  },
  {
    id: 5,
    label: 'Settings',
    icon: RiSettings3Line,
  },
];
