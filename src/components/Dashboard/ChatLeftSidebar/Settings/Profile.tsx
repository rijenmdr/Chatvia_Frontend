import { Avatar, Box, Flex, Icon, Input, Select, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';

const Profile = () => {
  const bgColor = useColorModeValue('light.200', 'dark.100');

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" py="1.5rem">
      <Input type="file" display="none" ref={inputRef} />
      <Box position="relative">
        <Avatar size="xl" cursor="pointer" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mb="1.5rem" />

        <Flex
          position="absolute"
          cursor="pointer"
          bottom="25%"
          right="0"
          width="30px"
          height="30px"
          bg={bgColor}
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          onClick={() => inputRef?.current?.click()}
        >
          <Icon as={AiOutlineCamera} fontSize="18px" />
        </Flex>
      </Box>

      <Text fontSize="md" mb="0.25rem" fontWeight="semibold">
        Dan Abrahmov
      </Text>

      <Flex>
        <Select variant="unstyled" size="sm" color="gray.500" value="online">
          <option value="online">Online</option>
          <option value="away">Away</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Profile;
