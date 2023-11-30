import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import DataList from '../../../../common/DataList';

const About = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.500');

  return (
    <Accordion allowToggle my="8px">
      <AccordionItem m={4}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            About
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel bg={bgColor} pb={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <DataList name="Name" value="Patricia Smith" />
            <Button leftIcon={<AiOutlineEdit />} colorScheme="gray" size="sm">
              Edit
            </Button>
          </Flex>
          <DataList name="Email" value="adc@123.com" />
          <DataList name="Time" value="11:40 AM" />
          <DataList name="Location" value="California, USA" />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default About;
