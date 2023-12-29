import React from 'react';
import { LockIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  LightMode,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { ChangePasswordSchema, ChangePasswordSchemaType } from '../../validation/user';
import { changePassword } from '../../services/user';
import { useRouter } from 'next/router';

interface IProps {
  email: string;
}

const ChangePassword = ({ email }: IProps) => {
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ChangePasswordSchemaType>({ resolver: zodResolver(ChangePasswordSchema) });

  const { mutate, status } = useMutation(changePassword, {
    onSuccess: (res) => {
      toast({
        title: "Change Password",
        description: res?.message || "Password has been changed successfully.",
        status: "success",
        position: "top-right",
        isClosable: true
      });
      router.push('/login')
    }
  })

  const onSubmit = (values: ChangePasswordSchemaType) => {
    const postData = {
      ...values,
      email
    }
    mutate(postData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
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
        <FormControl isInvalid={!!errors?.confirmPassword}>
          <FormLabel fontSize="sm" color="gray.500">
            Confirm Password
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type="password"
              placeholder="Enter confirm password"
              {...register("confirmPassword")}
              disabled={status === "loading"}
            />
          </InputGroup>
          {
            errors?.confirmPassword &&
            <FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
          }
        </FormControl>
        <LightMode>
          <Button type='submit' colorScheme={'brand'}>Change</Button>
        </LightMode>
      </Stack>
    </form>
  );
};

export default ChangePassword;
