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
  Text,
} from '@chakra-ui/react';
import React from 'react';

const EmailForm = () => {
  return (
    <>
      <Box bg="green.100" w="100%" p={4} color="green.500" borderRadius="4px" border="none" textAlign="center">
        <Text fontSize="sm">Enter your Email and OTP will be sent to you!</Text>
      </Box>
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

      <LightMode>
        <Button colorScheme={'brand'}>Submit</Button>
      </LightMode>
    </>
  );
};

export default EmailForm;
