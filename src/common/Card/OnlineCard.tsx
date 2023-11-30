import { Avatar, AvatarBadge, Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const OnlineCard = () => {
  const bgColor = useColorModeValue('light.200', 'dark.100');
  return (
    <Box display="inline-block" position="relative" height="100%" minW="71px" cursor="pointer">
      <Box>
        <Box bg={bgColor} borderRadius="5px" display="block" mt="16px" padding="8px" textAlign="center">
          <Avatar
            size="sm"
            cursor="pointer"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            bgColor="brand.100"
            color="brand.500"
            position="absolute"
            top="0"
            right="0"
            left="0"
            mx="auto"
          >
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>

          <Text fontSize="13px" fontWeight="600" mt="1rem" mb="0.25rem">
            Jon
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default OnlineCard;
