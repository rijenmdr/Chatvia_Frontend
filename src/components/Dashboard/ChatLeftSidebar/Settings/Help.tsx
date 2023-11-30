import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Help = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.500');

  return (
    <Accordion allowToggle my="8px">
      <AccordionItem m={4}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Help
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel bg={bgColor} p={'1.25rem'}>
          <Link href="#" passHref>
            <Text color="gray.400" fontSize="13px" py="1rem">
              FAQs
            </Text>
          </Link>

          <Divider />
          <Link href="#" passHref>
            <Text color="gray.400" fontSize="13px" py="1rem">
              Contact
            </Text>
          </Link>

          <Divider />

          <Link href="#" passHref>
            <Text color="gray.400" fontSize="13px" py="1rem">
              Terms & Privacy policy
            </Text>
          </Link>
          <Divider />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Help;
