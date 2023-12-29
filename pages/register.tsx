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
  useToast,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import PageHead from '../src/common/Head';
import { SignUpSchema, SignUpSchemaType } from '../src/validation/user';
import { signUp } from '../src/services/user';

const Register = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const { mutate, status } = useMutation(signUp, {
    onSuccess: (res) => {
      toast({
        title: "User Registration",
        description: res?.message || "User Registration Successful.",
        status: "success",
        position: "top-right",
        isClosable: true
      })
      router.push("/login");
    }
  })

  const onSubmit = (values: SignUpSchemaType) => {
    mutate(values)
  }

  return (
    <AuthLayout title="Sign Up" subTitle="Get your Chatvia account now.">
      <PageHead title="Sign Up" />
      <BoxLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={6}>
            <FormControl isInvalid={!!errors?.name}>
              <FormLabel fontSize="sm" color="gray.500">
                Name
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<Icon as={BiUser} color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Enter name"
                  {...register("name")}
                  disabled={status === "loading"}
                />
              </InputGroup>
              {
                errors?.name &&
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
              }
            </FormControl>
            <FormControl isInvalid={!!errors?.email}>
              <FormLabel fontSize="sm" color="gray.500">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  placeholder="Enter email"
                  {...register("email")}
                  disabled={status === "loading"}
                />
              </InputGroup>
              {
                errors?.email &&
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              }
            </FormControl>

            <FormControl isInvalid={!!errors?.password}>
              <FormLabel fontSize="sm" color="gray.500">
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...register("password")}
                  disabled={status === "loading"}
                />
              </InputGroup>
              {
                errors?.password &&
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              }
            </FormControl>

            <LightMode>
              <Button
                type='submit'
                colorScheme={'brand'}
                isLoading={status === "loading"}
                disabled={status === "loading"}
              >
                Sign up
              </Button>
            </LightMode>
          </Stack>
        </form>
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
