/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  LightMode,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Head from 'next/head';
import PageHead from '../src/common/Head';

const Login = () => {
  return (
    <>
      <PageHead title="Sign In" />
      <AuthLayout title="Sign In" subTitle="Sign In to continue to Chatvia.">
        <BoxLayout>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel fontSize="sm" color="gray.500">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<EmailIcon color="gray.300" />}
                />
                <Input type="email" placeholder="Enter email" />
              </InputGroup>
              <FormErrorMessage>We never share your email.</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" color="gray.500">
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<LockIcon color="gray.300" />}
                />
                <Input type="password" placeholder="Enter password" />
              </InputGroup>
              <FormErrorMessage>We never share your email.</FormErrorMessage>
            </FormControl>

            <Link href="/forgot-password">
              <Text display="inline-block" fontSize="sm" color="gray.500">
                Forgot Password?
              </Text>
            </Link>

            <LightMode>
              <Button colorScheme={'brand'}>Sign in</Button>
            </LightMode>
          </Stack>
        </BoxLayout>

        <Flex mt="2rem" justifyContent="center">
          <Text fontSize="md" color="gray.500">
            Don't have an account ?
          </Text>
          <Link href="/register" passHref>
            <Text px={1} color="brand.500">
              Sign up
            </Text>
          </Link>
        </Flex>
      </AuthLayout>
    </>
  );
};

export default Login;
