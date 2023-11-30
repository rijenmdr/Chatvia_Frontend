import { Avatar, Box, Flex, Icon, Text, border, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import ActiveIcon from '../../../../common/ActiveIcon';
import ChatHeaderSearch from './ChatHeaderSearch';
import ChatMoreInfo from './ChatMoreInfo';

const ChatHeader = () => {
  const borderColor = useColorModeValue('gray.200', 'border.100');

  return (
    <Flex justifyContent="space-between" padding="1.5rem" borderBottom="1px solid" borderColor={borderColor}>
      <Flex flex="2" alignItems="center">
        <Avatar size="sm" cursor="pointer" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Text fontSize="md" paddingLeft="1rem" fontWeight="semibold">
          Dan Abrahmov
        </Text>
        <Box mx=".5rem">
          <ActiveIcon isActive={true} />
        </Box>
      </Flex>
      <Flex flex="1" justifyContent="end">
        <ChatHeaderSearch />
        <Icon as={BsFillPersonFill} w={5} h={5} cursor="pointer" color="gray.500" mx=".8rem" />
        <ChatMoreInfo />
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
