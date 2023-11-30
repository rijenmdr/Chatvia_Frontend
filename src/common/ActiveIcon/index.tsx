import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  isActive: boolean;
}

const ActiveIcon = ({ isActive }: IProps) => {
  const color = useColorModeValue('light.200', 'dark.200');
  return (
    <Box bg={isActive ? 'green.400' : 'yellow.500'} width="10px" height="10px" borderRadius="50%">
      <Box bg={color} width="5px" height="5px" borderRadius="50%" transform="translate(50%, 50%)" />
    </Box>
  );
};

export default ActiveIcon;
