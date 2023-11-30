import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonPlusFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiBlock } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { contactLists } from '../../../../constant/contactList';
import AddContact from './AddContact';

const ContactList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nameColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <>
      <Box pb="1.5rem">
        <Flex justifyContent="space-between" alignItems="center" mb="1.5rem">
          <Text fontSize="xl">Contacts</Text>

          <IconButton onClick={onOpen} aria-label="Create Group" fontSize="16px" icon={<BsFillPersonPlusFill />} />
        </Flex>

        <InputGroup>
          <InputLeftElement pointerEvents="none" top="5px">
            <FiSearch color="gray.300" />
          </InputLeftElement>

          <Input placeholder="Search Contacts..." size="lg" fontSize=".875rem" />
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
        {contactLists.map((list) => (
          <Box key={list.id}>
            <Text color="brand.500" p="1rem">
              {list.initial}
            </Text>

            {list.users.map((user) => (
              <Flex key={user.id} alignItems="center" justifyContent="space-between" padding="10px 20px">
                <Text fontSize="14px" color={nameColor}>
                  {user.name}
                </Text>

                <Menu>
                  <MenuButton>
                    <Icon
                      aria-label="Option"
                      fontSize="16px"
                      cursor={'pointer'}
                      color="gray.500"
                      as={BsThreeDotsVertical}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem color="gray.400" icon={<AiOutlineShareAlt />}>
                      <Text color="gray.400" fontSize="15px">
                        Share
                      </Text>
                    </MenuItem>
                    <MenuItem color="gray.400" icon={<BiBlock />}>
                      {' '}
                      <Text color="gray.400" fontSize="15px">
                        Block
                      </Text>
                    </MenuItem>
                    <MenuItem color="gray.400" icon={<RiDeleteBinLine />}>
                      {' '}
                      <Text color="gray.400" fontSize="15px">
                        Remove
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ))}
          </Box>
        ))}
      </VStack>

      <AddContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactList;
