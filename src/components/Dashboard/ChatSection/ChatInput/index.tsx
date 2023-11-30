import { Box, Button, Flex, Icon, Input, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { BsEmojiSmile, BsFillImageFill } from 'react-icons/bs';
import { MdAttachFile, MdSend } from 'react-icons/md';
import React from 'react';

const ChatInput = () => {
  const inputBgColor = useColorModeValue('gray.200', 'dark.100');
  const borderColor = useColorModeValue('gray.200', 'border.100');

  return (
    <Flex
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      justifyContent="space-between"
      alignItems="center"
      padding="1.5rem"
      borderTop="1px solid"
      borderColor={borderColor}
      width="100%"
    >
      <input type="file" style={{ display: 'none' }} />
      <Box flex="3">
        <Input placeholder="Enter Message..." size="md" fontSize=".875rem" bg={inputBgColor} />
      </Box>

      <Flex flex="1" alignItems="center" justifyContent="space-around">
        <Icon as={BsEmojiSmile} cursor="pointer" mx=".5rem" color="brand.400" />
        <Icon as={MdAttachFile} cursor="pointer" mx=".5rem" color="brand.400" />
        <Icon as={BsFillImageFill} cursor="pointer" mx=".5rem" color="brand.400" />
        <Button bg="brand.500" color="#fff" size="md" _hover={{ bg: 'brand.400' }}>
          <Icon as={MdSend} fontSize="1rem" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatInput;
