import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  LightMode,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Security = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.500');

  return (
    <Accordion allowToggle my="8px">
      <AccordionItem m={4}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Security
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel bg={bgColor} p={'1.25rem'}>
          <Flex justifyContent="space-between" alignItems="center" py={'1.25rem'}>
            <Text fontSize="13px">Show security notification</Text>
            <LightMode>
              <Switch size="sm" colorScheme="brand" />
            </LightMode>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Security;
