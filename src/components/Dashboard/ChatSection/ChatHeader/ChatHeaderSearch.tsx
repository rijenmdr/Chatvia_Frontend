import { Icon, Input, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const ChatHeaderSearch = () => {
  return (
    <Menu>
      <MenuButton>
        <Icon as={CiSearch} w={5} h={5} cursor="pointer" color="gray.500" mx=".8rem" />
      </MenuButton>
      <MenuList p={2}>
        <Input placeholder="Search..." size="lg" fontSize=".875rem" color="#fff" />
      </MenuList>
    </Menu>
  );
};

export default ChatHeaderSearch;
