import React from 'react';
import { Container, Flex, useColorModeValue } from '@chakra-ui/react';

interface IProps {
  children: React.ReactNode;
}

const BoxLayout = ({ children }: IProps) => {
  const bgColor = useColorModeValue('light.200', 'dark.200');
  return (
    <Container
      bgColor={bgColor}
      p={{ base: '28px', sm: '40px' }}
      wordBreak="break-word"
      borderRadius="0.25rem"
      flexDir="column"
      minW={{ base: '100%', sm: '450px' }}
    >
      {children}
    </Container>
  );
};

export default BoxLayout;
