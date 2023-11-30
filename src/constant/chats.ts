import { IChat } from '../interface';

export const chats: IChat[] = [
  {
    _id: '1',
    date: 'Sat Jun 25 2023 22:14:28 GMT+0545 (Nepal Time)',
    chatList: [
      {
        sender: {
          _id: '1',
          name: 'Dan Abrahmov',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        receiver: {
          _id: '2',
          name: 'Elon Musk',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        message: 'Hello Elon',
        time: '1:00 PM',
      },
      {
        receiver: {
          _id: '1',
          name: 'Dan Abrahmov',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        sender: {
          _id: '2',
          name: 'Elon Musk',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        message: 'Hello Dan',
        time: '1:00 PM',
      },
    ],
  },
  {
    _id: '1',
    date: 'Sat Jun 23 2023 22:14:28 GMT+0545 (Nepal Time)',
    chatList: [
      {
        sender: {
          _id: '1',
          name: 'Dan Abrahmov',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        receiver: {
          _id: '2',
          name: 'Elon Musk',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        message: 'Hello World',
        time: '1:00 PM',
      },
      {
        receiver: {
          _id: '1',
          name: 'Dan Abrahmov',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        sender: {
          _id: '2',
          name: 'Elon Musk',
          profile_img: 'https://bit.ly/dan-abramov',
        },
        message: 'Hello Dan. This is to inform you about the changes that we have made around here.',
        time: '1:00 PM',
      },
    ],
  },
];
