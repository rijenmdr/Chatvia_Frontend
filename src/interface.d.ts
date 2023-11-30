export interface IUser {
  _id: string;
  name: string;
  email?: string;
  profile_img: string;
}

export interface IChatList {
  sender: IUser;
  receiver: IUser;
  message: string;
  time: string;
}

export interface IChat {
  _id: string;
  date: string;
  chatList: IChatList[];
}
