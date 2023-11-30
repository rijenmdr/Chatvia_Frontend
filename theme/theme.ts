import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { accordionTheme } from './accordionTheme';
import { modalTheme } from './modalTheme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      100: '#7269ef40',
      400: '#7a73e1',
      500: '#7269ef',
    },
    dark: {
      100: '#36404a',
      200: '#303841',
      300: '#262e35',
      400: '#495047',
    },
    light: {
      100: '#f7f7ff',
      200: '#fff',
      300: '#abb4d2',
      400: '#f5f7fb',
    },
    border: {
      100: '#36404a',
    },
  },
  fonts: {
    heading: `'Public Sans', sans-serif`,
    body: "'Public Sans', sans-serif",
  },
  config,
  components: { Accordion: accordionTheme, Modal: modalTheme },
});

export default theme;
