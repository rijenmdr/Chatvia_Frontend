import { EmailIcon, LockIcon } from '@chakra-ui/icons';
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

const ChangePassword = () => {
  return (
    <>
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
      <FormControl>
        <FormLabel fontSize="sm" color="gray.500">
          Confirm Password
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<LockIcon color="gray.300" />}
          />
          <Input type="password" placeholder="Enter confirm password" />
        </InputGroup>
        <FormErrorMessage>We never share your email.</FormErrorMessage>
      </FormControl>
      <LightMode>
        <Button colorScheme={'brand'}>Submit</Button>
      </LightMode>
    </>
  );
};

export default ChangePassword;
