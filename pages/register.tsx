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
  Flex,
  Icon,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import Head from 'next/head';

import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import PageHead from '../src/common/Head';

const Register = () => {
  return (
    <AuthLayout title="Sign Up" subTitle="Get your Chatvia account now.">
      <PageHead title="Sign Up" />
      <BoxLayout>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel fontSize="sm" color="gray.500">
              Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<Icon as={BiUser} color="gray.300" />}
              />
              <Input type="text" placeholder="Enter name" />
            </InputGroup>
            <FormErrorMessage>We never share your email.</FormErrorMessage>
          </FormControl>
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

          <LightMode>
            <Button colorScheme={'brand'}>Sign up</Button>
          </LightMode>
        </Stack>
      </BoxLayout>

      <Flex mt="2rem" justifyContent="center">
        <Text fontSize="md" color="gray.500">
          Already have an account ?
        </Text>
        <Link href="/login" passHref>
          <Text px={1} color="brand.500">
            Sign in
          </Text>
        </Link>
      </Flex>
    </AuthLayout>
  );
};

export default Register;
