import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ActiveIcon from '../../../../common/ActiveIcon';
import DataList from '../../../../common/DataList';

const ProfileDetail = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.500');

  return (
    <>
      <Text fontSize="xl">My Profile</Text>

      <Flex justifyContent="center" alignItems="center" flexDirection="column" py="1.5rem">
        <Avatar size="xl" cursor="pointer" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mb="1.5rem" />

        <Text fontSize="md" mb="0.25rem" fontWeight="semibold">
          Dan Abrahmov
        </Text>

        <Flex alignItems="center">
          <ActiveIcon isActive={true} />
          <Text color="gray.500" fontSize="md" fontWeight="light" px=".5rem">
            Active
          </Text>
        </Flex>
      </Flex>

      <Divider />

      <Box py="1.5rem">
        <Text fontSize="15px" color="gray.500" mb="1.5rem">
          If several languages coalesce, the grammar of the resulting language is more simple and regular than that of
          the individual.
        </Text>
      </Box>

      <Box>
        <Accordion allowToggle>
          <AccordionItem m={4}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                About
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel bg={bgColor} pb={4}>
              <DataList name="Name" value="Patricia Smith" />
              <DataList name="Email" value="adc@123.com" />
              <DataList name="Time" value="11:40 AM" />
              <DataList name="Location" value="California, USA" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default ProfileDetail;
