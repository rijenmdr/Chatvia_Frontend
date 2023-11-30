import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useSidebarStore } from '../../../store/sidebar';
import ChatList from './ChatList';
import ContactList from './ContactList';
import GroupList from './GroupList';
import ProfileDetail from './ProfileDetail';
import Settings from './Settings';

const ChatLeftSidebar = () => {
  const bgColor = useColorModeValue('light.100', 'dark.200');

  const { activeItem } = useSidebarStore();
  return (
    <Box
      bg={bgColor}
      height={'auto'}
      width="100%"
      px="1.5rem"
      pt="1.5rem"
      pb={{ base: '5.5rem', lg: '1.5rem' }}
      maxW={{ lg: '380px' }}
      minW={{ lg: '380px' }}
      // overflowY="auto"
      __css={{
        '&::-webkit-scrollbar': {
          w: '2',
        },
        '&::-webkit-scrollbar-track': {
          w: '1',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10',
          bg: 'gray.500',
          display: 'none',
        },
      }}
    >
      {activeItem === 'Profile' && <ProfileDetail />}
      {activeItem === 'Groups' && <GroupList />}
      {activeItem === 'Contacts' && <ContactList />}
      {activeItem === 'Chats' && <ChatList />}
      {activeItem === 'Settings' && <Settings />}
    </Box>
  );
};

export default ChatLeftSidebar;
