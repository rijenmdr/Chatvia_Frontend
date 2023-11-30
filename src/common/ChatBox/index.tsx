import React from 'react';
import { IChatList } from '../../interface';
import { Avatar, Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDotsVertical, BsClock } from 'react-icons/bs';

interface IProps {
  chat: IChatList;
}

const receiver = '2';

const ChatBox = ({ chat }: IProps) => {
  const bgColor = useColorModeValue('light.400', 'dark.100');
  const textColor = useColorModeValue('#343A40', '#fff');

  const isUserSending = receiver === chat?.sender?._id;

  return (
    <Box
      display="inline-flex"
      alignItems="flex-end"
      flexDirection={isUserSending ? 'row-reverse' : 'row'}
      textAlign={isUserSending ? 'right' : 'left'}
    >
      <Avatar
        size="sm"
        cursor="pointer"
        name="Dan Abrahmov"
        src={chat?.sender?.profile_img}
        marginRight={!isUserSending ? '1rem' : '0'}
        marginLeft={isUserSending ? '1rem' : '0'}
      />
      <Box>
        <Flex flexDir={isUserSending ? 'row-reverse' : 'row'}>
          <Box
            padding="12px 20px"
            color={isUserSending ? textColor : '#fff'}
            background={!isUserSending ? 'brand.500' : bgColor}
            maxWidth="25rem"
            borderRadius={isUserSending ? '8px 8px 0 8px' : '8px 8px 8px 0'}
            textAlign={isUserSending ? 'left' : 'right'}
            position="relative"
            _before={{
              borderBottom: '5px solid transparent',
              borderLeft: '5px solid #7269ef',
              borderLeftColor: 'brand.500',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #7269ef',
              borderTopColor: 'brand.500',
              bottom: '-10px',
              content: '""',
              left: '0',
              position: 'absolute',
              right: 'auto',
            }}
          >
            <Text fontSize="sm">{chat?.message}</Text>
            <Flex alignItems="center" marginTop=".25rem">
              <Icon marginRight=".25rem" as={BsClock} fontSize="2xs" color="light.300" />
              <Text fontSize="xs" color="light.300">
                {chat?.time}
              </Text>
            </Flex>
          </Box>
          <Icon as={BsThreeDotsVertical} marginX=".5rem" cursor="pointer" />
        </Flex>
        <Text fontSize="xs" marginTop="1rem">
          {chat?.sender?.name}
        </Text>
      </Box>
    </Box>
  );
};

export default ChatBox;
