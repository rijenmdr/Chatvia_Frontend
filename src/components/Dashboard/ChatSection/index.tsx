import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatBody from './ChatBody';

const ChatSection = () => {
  const bgColor = useColorModeValue('light.200', 'dark.300');
  return (
    <Box background={bgColor} width="100%" display="block" position="relative" height="100vh">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </Box>
  );
};

export default ChatSection;
