import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import OnlineCard from '../../../../common/Card/OnlineCard';
import ItemContainer from '../../../../common/ItemContainer';
import { chatList } from '../../../../constant/chatList';

const ChatList = () => {
  const hoverIcon = useColorModeValue('gray.900', 'white');
  const inputBgColor = useColorModeValue('gray.200', 'gray.600');

  const scrollRef = useRef<HTMLDivElement | any>(null);

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 78;
    } else {
      current.scrollLeft += 78;
    }
  };

  return (
    <>
      <Box pb="1.5rem">
        <Text fontSize="xl" mb="1.5rem">
          Chats
        </Text>

        <InputGroup>
          <InputLeftElement pointerEvents="none" top="5px">
            <FiSearch color="gray.300" />
          </InputLeftElement>

          <Input placeholder="Search messages or users" size="lg" fontSize=".875rem" bg={inputBgColor} />
        </InputGroup>

        <Box position="relative" mb="1.5rem">
          <HStack
            spacing={4}
            mt={'1rem'}
            overflowX="auto"
            width={'100%'}
            whiteSpace="nowrap"
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            ref={scrollRef}
          >
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />
            <OnlineCard />

            <Icon
              position="absolute"
              left={'-6px'}
              top="50%"
              zIndex="15"
              aria-label="Left"
              fontSize="12px"
              color="brand.500"
              sx={{
                marginInlineStart: '0 !important',
              }}
              as={BiLeftArrow}
              cursor="pointer"
              _hover={{
                color: hoverIcon,
              }}
              onClick={() => handleScroll('right')}
            />
            <Icon
              position="absolute"
              right={'-6px'}
              top="50%"
              zIndex="15"
              aria-label="Search database"
              fontSize="12px"
              color="brand.500"
              as={BiRightArrow}
              cursor="pointer"
              _hover={{
                color: hoverIcon,
              }}
              onClick={() => handleScroll('left')}
            />
          </HStack>
        </Box>

        <Text fontSize="md" mb="1rem">
          Recent
        </Text>

        <VStack
          height="65vh"
          __css={{
            '&::-webkit-scrollbar': {
              w: '2',
            },
            '&::-webkit-scrollbar-track': {
              w: '1',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '10',
              bg: 'gray.600',
            },
          }}
          overflowY="auto"
          align="stretch"
        >
          {chatList.map((list) => (
            <ItemContainer key={list.id}>
              <Flex alignItems="flex-start">
                <Flex alignItems="center" flex={1}>
                  <Avatar name={list.name} src="#" bgColor="brand.100" color="brand.500" size="sm" mr="1rem">
                    <AvatarBadge boxSize="1em" bg={list.status === 'online' ? 'green.400' : 'yellow.500'} />
                  </Avatar>

                  <Box>
                    <Text fontSize="15px" mb="0.25rem" fontWeight="600">
                      {list.name}
                    </Text>

                    <Text fontSize="14px" color="gray.500">
                      {list.lastMessage}
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize="11px" color="gray.500" mb="0.5rem">
                    {list.time}
                  </Text>

                  {list.unread && (
                    <Tag size="sm" colorScheme="red">
                      <TagLabel>{list?.unread}</TagLabel>
                    </Tag>
                  )}
                </Box>
              </Flex>
            </ItemContainer>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default ChatList;
