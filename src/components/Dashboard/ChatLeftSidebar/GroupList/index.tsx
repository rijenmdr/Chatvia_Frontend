import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import ItemContainer from '../../../../common/ItemContainer';
import { groupList } from '../../../../constant/groupList';
import { capitalize } from '../../../../helper/capitalize';
import CreateGroup from './CreateGroup';

const GroupList = () => {
  const nameColor = useColorModeValue('gray.500', 'gray.200');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pb="1.5rem">
        <Flex justifyContent="space-between" alignItems="center" mb="1.5rem">
          <Text fontSize="xl">Groups</Text>

          <IconButton onClick={onOpen} aria-label="Create Group" fontSize="16px" icon={<BsFillPersonPlusFill />} />
        </Flex>

        <InputGroup>
          <InputLeftElement pointerEvents="none" top="5px">
            <FiSearch color="gray.300" />
          </InputLeftElement>

          <Input placeholder="Search Groups..." size="lg" fontSize=".875rem" />
        </InputGroup>
      </Box>

      <VStack
        height="70vh"
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
        py="1.5rem"
      >
        {groupList.map((list) => (
          <ItemContainer key={list.id}>
            <Flex alignItems="center">
              <Avatar name={list.name} src="#" bgColor="brand.100" color="brand.500" size="sm" mr="1rem" />
              <Text flex="1" fontSize="sm" color={nameColor} fontWeight="600">
                #{list.name}
              </Text>

              {list.status === 'new' ? (
                <Tag size="sm" colorScheme="red">
                  <TagLabel>{capitalize(list.status)}</TagLabel>
                </Tag>
              ) : (
                list.newMessage !== 0 && (
                  <Tag size="sm" colorScheme="red">
                    <TagLabel>{list.newMessage}+</TagLabel>
                  </Tag>
                )
              )}
            </Flex>
          </ItemContainer>
        ))}
      </VStack>

      <CreateGroup isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default GroupList;
