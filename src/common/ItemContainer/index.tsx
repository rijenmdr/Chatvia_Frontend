import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const ItemContainer = ({ children }: IProps) => {
  const hoverColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      display="block"
      padding="15px 20px"
      transition="all .4s"
      borderRadius="4px"
      cursor="pointer"
      _hover={{
        bg: hoverColor,
      }}
    >
      {children}
    </Box>
  );
};

export default ItemContainer;
