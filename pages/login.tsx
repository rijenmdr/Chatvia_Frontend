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
  useToast,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';

import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import PageHead from '../src/common/Head';
import { useForm } from 'react-hook-form';
import { LoginSchema, LoginSchemaType } from '../src/validation/user';
import { login } from '../src/services/user';
import { BsEye } from 'react-icons/bs';
import withPublic from '../src/hoc/withPublic';

const Login = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const { mutate, status } = useMutation(login, {
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res?.accessToken || "")
      router.push("/dashboard");
    }
  })

  const onSubmit = (values: LoginSchemaType) => {
    mutate(values)
  }

  return (
    <>
      <PageHead title="Sign In" />
      <AuthLayout title="Sign In" subTitle="Sign In to continue to Chatvia.">
        <BoxLayout>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
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

              <Link href="/forgot-password">
                <Text display="inline-block" fontSize="sm" color="gray.500">
                  Forgot Password?
                </Text>
              </Link>

              <LightMode>
                <Button type='submit' colorScheme={'brand'}>Sign in</Button>
              </LightMode>
            </Stack>
          </form>
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

export default withPublic(Login);
