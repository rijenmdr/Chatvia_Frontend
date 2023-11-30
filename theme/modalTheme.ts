import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { useColorModeValue } from '@chakra-ui/react';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => {
  const bgColor = useColorModeValue('light.100', 'dark.200');

  return {
    dialog: {
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'gray.600',
      bgColor: bgColor,
    },
  };
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'purple', //set the default color scheme to purple
    size: 'xl',
  },
});
