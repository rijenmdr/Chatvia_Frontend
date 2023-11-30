import { SettingsIcon } from '@chakra-ui/icons';
import { Avatar, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { RiProfileFill } from 'react-icons/ri';

const ProfileMenuItem = () => {
  return (
    <Menu size="sm">
      <MenuButton>
        <Avatar size="sm" cursor="pointer" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<RiProfileFill />}>Profile</MenuItem>
        <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem icon={<BiLogOut />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenuItem;
