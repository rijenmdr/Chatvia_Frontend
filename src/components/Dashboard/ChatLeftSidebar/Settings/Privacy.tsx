import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  LightMode,
  Select,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Privacy = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.500');

  return (
    <Accordion allowToggle my="8px">
      <AccordionItem m={4}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Privacy
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel bg={bgColor} p={'1.25rem'}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="13px">Profile photo</Text>
            <Select size="sm" width="40%" variant="filled" py="1rem">
              <option value="everyone">Everyone</option>
              <option value="myself">Myself</option>
            </Select>
          </Flex>

          <Divider />

          <Flex justifyContent="space-between" alignItems="center" py={'1.25rem'}>
            <Text fontSize="13px">Last Seen</Text>
            <LightMode>
              <Switch size="sm" colorScheme="brand" />
            </LightMode>
          </Flex>

          <Divider />

          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="13px">Status</Text>
            <Select size="sm" width="40%" variant="filled" py="1rem">
              <option value="everyone">Everyone</option>
              <option value="myself">Myself</option>
            </Select>
          </Flex>

          <Divider />

          <Flex justifyContent="space-between" alignItems="center" py={'1.25rem'}>
            <Text fontSize="13px">Read receipts</Text>
            <LightMode>
              <Switch size="sm" colorScheme="brand" />
            </LightMode>
          </Flex>

          <Divider />

          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="13px">Groups</Text>
            <Select size="sm" width="40%" variant="filled" py="1rem">
              <option value="everyone">Everyone</option>
              <option value="myself">Myself</option>
            </Select>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Privacy;
