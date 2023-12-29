import { Box, Button, Flex, HStack, LightMode, PinInput, PinInputField, Stack, Text, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VerifyOTPSchema, VerifyOTPSchemaType } from '../../validation/user';
import { useMutation } from 'react-query';
import { getOTP, verifyOTP } from '../../services/user';

interface IProps {
  email: string;
  setStage: React.Dispatch<React.SetStateAction<number>>
}

const OTPForm = ({ email, setStage }: IProps) => {
  const [timer, setTimer] = useState(60);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<VerifyOTPSchemaType>({ resolver: zodResolver(VerifyOTPSchema) });

  const { mutate, status } = useMutation(verifyOTP, {
    onSuccess: (res) => {
      toast({
        title: "OTP Verification",
        description: res?.message || "OTP Verification Successful.",
        status: "success",
        position: "top-right",
        isClosable: true
      });
      setStage(3);
    }
  })

  const { mutate: resendOTPMutation, status: resendOTPStatus } = useMutation(getOTP, {
    onSuccess: (res) => {
      toast({
        title: "OTP Resend",
        description: res?.message || "OTP has been resent to your email.",
        status: "success",
        position: "top-right",
        isClosable: true
      });
      setTimer(60);
    }
  })

  useEffect(() => {
    let time: any;

    if (timer !== 0) {
      time = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }

    return () => clearTimeout(time);
  }, [timer]);

  const handleResendCode = () => {
    if (timer === 0) {
      resendOTPMutation({ email })
    }
  };

  const handleComplete = (value: string) => {
    setValue("otp1", value?.charAt(0))
    setValue("otp2", value?.charAt(1))
    setValue("otp3", value?.charAt(2))
    setValue("otp4", value?.charAt(3))
    setValue("otp5", value?.charAt(4))
    setValue("otp6", value?.charAt(5))
  }

  const onSubmit = (values: VerifyOTPSchemaType) => {
    let otp = ""
    Object.entries(values).map(val => {
      otp = otp + val[1]
    }, "")
    mutate({
      otp,
      email
    })
  }

  return (
    <>
      <Box bg="green.100" w="100%" p={4} color="green.500" borderRadius="4px" border="none" textAlign="center">
        <Text fontSize="sm">Enter your OTP that has been sent to your email.</Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <HStack display="flex" justifyContent="center">
            <PinInput otp onComplete={handleComplete} isInvalid={!!errors?.otp1 || !!errors?.otp2 || !!errors?.otp3 || !!errors?.otp4 || !!errors?.otp5 || !!errors?.otp6} isDisabled={resendOTPStatus === "loading" || status === "loading"} size="lg" placeholder="">
              <PinInputField {...register("otp1")} />
              <PinInputField {...register("otp2")} />
              <PinInputField {...register("otp3")} />
              <PinInputField {...register("otp4")} />
              <PinInputField {...register("otp5")} />
              <PinInputField {...register("otp6")} />
            </PinInput>
          </HStack>

          <Flex mt="2rem" justifyContent="center" alignItems="center">
            <Text
              fontSize="sm"
              color={'gray.500'}
              cursor={'default'}
            >
              Didn't get OTP?
              <Box
                as='span'
                color={timer === 0 ? 'brand.500' : 'gray.500'}
                cursor={timer === 0 ? 'pointer' : 'default'}
                onClick={handleResendCode}
              >
                {" "}
                Resend
              </Box>
            </Text>
            {timer !== 0 && <Text fontSize="sm" color="gray.500" px={1}>{`after ${timer}`}</Text>}
          </Flex>

          <LightMode>
            <Button type='submit' colorScheme={'brand'}>Verify</Button>
          </LightMode>
        </Stack>
      </form>

    </>
  );
};

export default OTPForm;
