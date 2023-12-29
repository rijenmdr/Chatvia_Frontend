import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
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
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { GetOTPSchema, GetOTPSchemaType } from '../../validation/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { getOTP } from '../../services/user';

interface IProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setStage: React.Dispatch<React.SetStateAction<number>>
}

const EmailForm = ({ setEmail, setStage }: IProps) => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<GetOTPSchemaType>({ resolver: zodResolver(GetOTPSchema) });

  const { mutate, status } = useMutation(getOTP, {
    onSuccess: (res) => {
      toast({
        title: "OTP Sent.",
        description: res?.message || "OTP has been sent to your email.",
        status: "success",
        position: "top-right",
        isClosable: true
      });
      setStage(2);
    }
  })

  const onSubmit = (values: GetOTPSchemaType) => {
    setEmail(values?.email)
    mutate(values)
  }

  return (
    <>
      <Box bg="green.100" w="100%" p={4} color="green.500" borderRadius="4px" border="none" textAlign="center">
        <Text fontSize="sm">Enter your Email and OTP will be sent to you!</Text>
      </Box>

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
          <LightMode>
            <Button
              type='submit'
              colorScheme={'brand'}
              isLoading={status === "loading"}
              disabled={status === "loading"}
            >
              Get OTP
            </Button>
          </LightMode>
        </Stack>
      </form>
    </>
  );
};

export default EmailForm;
