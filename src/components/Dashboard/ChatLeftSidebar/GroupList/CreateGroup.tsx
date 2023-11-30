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

const CreateGroup = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />

        <Divider />
        <ModalBody py={6}>
          <FormControl>
            <FormLabel fontSize="md" color="gray.500">
              Group Name
            </FormLabel>
            <Input placeholder="Enter Group Name" fontSize="sm" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontSize="md" color="gray.500">
              Group Member
            </FormLabel>

            <Button colorScheme="gray" size="sm">
              Select Members
            </Button>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontSize="md" color="gray.500">
              Description
            </FormLabel>
            <Textarea placeholder="Enter Description" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ChakraLink color="brand.500" onClick={onClose} px={6}>
            Close
          </ChakraLink>
          <LightMode>
            <Button colorScheme="brand" mr={3}>
              Create
            </Button>
          </LightMode>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateGroup;
