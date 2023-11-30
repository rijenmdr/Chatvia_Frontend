import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { chats } from '../../../../constant/chats';
import ChatDate from './ChatDate';
import ChatBox from '../../../../common/ChatBox';

const receiver = '2';

const ChatBody = () => {
  return (
    <Flex minHeight={'73vh'} height={'73vh'} overflowY={'auto'} flexDirection={'column-reverse'} padding="1.5rem">
      {chats &&
        chats.length &&
        chats.map((chat) => (
          <>
            <Flex flexDirection="column">
              {chat?.chatList?.map((list) => (
                <Box alignSelf={receiver === list?.receiver?._id ? 'flex-start' : 'flex-end'}>
                  <ChatBox chat={list} />
                </Box>
              ))}
            </Flex>
            <Box>
              <ChatDate date={chat?.date} />
            </Box>
          </>
        ))}
    </Flex>
  );
};

export default ChatBody;
