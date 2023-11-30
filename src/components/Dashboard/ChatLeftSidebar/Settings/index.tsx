import { Text } from '@chakra-ui/react';
import React from 'react';
import About from './About';
import Help from './Help';
import Privacy from './Privacy';
import Profile from './Profile';
import Security from './Security';

const Settings = () => {
  return (
    <>
      <Text fontSize="xl">Settings</Text>

      <Profile />

      <About />

      <Privacy />

      <Security />

      <Help />
    </>
  );
};

export default Settings;
