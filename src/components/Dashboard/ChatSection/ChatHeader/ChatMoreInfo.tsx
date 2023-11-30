import { Icon, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { BsThreeDots, BsArchive, BsVolumeMute } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import React from 'react';

const ChatMoreInfo = () => {
  return (
    <Menu size="sm">
      <MenuButton>
        <Icon as={BsThreeDots} w={5} h={5} cursor="pointer" color="gray.500" mx=".8rem" />
      </MenuButton>
      <MenuList p={2}>
        <MenuItem display="flex" justifyContent="space-between">
          <Text>Archive</Text>
          <Icon as={BsArchive} />
        </MenuItem>
        <MenuItem display="flex" justifyContent="space-between">
          <Text>Muted</Text>
          <Icon as={BsVolumeMute} />
        </MenuItem>
        <MenuItem display="flex" justifyContent="space-between">
          <Text>Delete</Text>
          <Icon as={RiDeleteBin6Line} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ChatMoreInfo;
