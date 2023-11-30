import React from 'react';
import { Box, Text, useColorMode, useColorModeValue, Container, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import LogoPrimary from '../../../public/images/primary-logo.png';
import LogoSecondary from '../../../public/images/secondary-logo.png';
interface IProps {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}

const AuthLayout = ({ children, title, subTitle }: IProps) => {
  const { colorMode } = useColorMode();

  const bg = useColorModeValue('light.100', 'dark.100');
  return (
    <Box bgColor={bg} minH="100vh" h="100%" py="3rem" pt={'2rem'} overflowY={'auto'}>
      <Container maxW="sm" centerContent>
        <VStack>
          <Box display="block" marginBottom="2rem">
            {colorMode === 'dark' ? (
              <Image src={LogoSecondary} alt="" width={120} height={30} />
            ) : (
              <Image src={LogoPrimary} alt="" width={120} height={30} />
            )}
          </Box>

          <Box w="100%" textAlign="center">
            <Text fontSize="xl" fontWeight={'bold'} mb="8px">
              {title}
            </Text>
            <Text color="gray.500" fontSize="md" mb="1.5rem">
              {subTitle}
            </Text>
          </Box>

          <Box>
            {children}

            <Box mt="1rem" textAlign="center">
              <Text fontSize="sm" color="gray.500">
                © 2022 Chatvia. Created by Rijen
              </Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AuthLayout;
