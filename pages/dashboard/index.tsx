import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ChatLeftSidebar from '../../src/components/Dashboard/ChatLeftSidebar';
import SideMenu from '../../src/components/Dashboard/SideMenu';
import ChatSection from '../../src/components/Dashboard/ChatSection';

const Dashboard = () => {
  const bgColor = useColorModeValue('light.100', 'dark.200');
  return (
    <Flex bg={bgColor}>
      <SideMenu />

      <ChatLeftSidebar />

      <ChatSection />
      {/* <Box bgColor="gray.900" height="100vh" width="100%"></Box> */}
    </Flex>
  );
};

export default Dashboard;
