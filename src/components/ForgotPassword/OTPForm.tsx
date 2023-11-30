import { Box, Button, Flex, HStack, LightMode, PinInput, PinInputField, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const OTPForm = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let time: any;

    console.log('outside');
    if (timer !== 0) {
      console.log('inside');
      time = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    }

    return () => clearTimeout(time);
  }, [timer]);

  const handleResendCode = () => {
    setTimer(60);
  };
  return (
    <>
      <Box bg="green.100" w="100%" p={4} color="green.500" borderRadius="4px" border="none" textAlign="center">
        <Text fontSize="sm">Enter your OTP that has been sent to your email.</Text>
      </Box>
      <HStack display="flex" justifyContent="center">
        <PinInput size="lg" placeholder="">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <Flex mt="2rem" justifyContent="center" alignItems="center">
        <Text
          fontSize="sm"
          color={timer === 0 ? 'brand.500' : 'gray.500'}
          cursor={timer === 0 ? 'pointer' : 'default'}
          onClick={handleResendCode}
        >
          Resend
        </Text>
        {timer !== 0 && <Text fontSize="sm" color="gray.500" px={1}>{`after ${timer}`}</Text>}
      </Flex>

      <LightMode>
        <Button colorScheme={'brand'}>Verify</Button>
      </LightMode>
    </>
  );
};

export default OTPForm;
