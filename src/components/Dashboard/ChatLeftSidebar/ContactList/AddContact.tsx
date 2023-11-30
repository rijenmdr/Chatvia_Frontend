import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Link as ChakraLink,
  LightMode,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddContact = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Contact</ModalHeader>
        <ModalCloseButton />

        <Divider />
        <ModalBody py={6}>
          <FormControl>
            <FormLabel fontSize="15px" color="gray.500">
              Email
            </FormLabel>
            <Input placeholder="Enter Email" fontSize="sm" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontSize="15px" color="gray.500">
              Invitation Message
            </FormLabel>
            <Textarea placeholder="Enter Message" fontSize="sm" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ChakraLink fontSize="15px" color="brand.500" onClick={onClose} px={6}>
            Close
          </ChakraLink>
          <LightMode>
            <Button colorScheme="brand" mr={3}>
              Invite
            </Button>
          </LightMode>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddContact;
