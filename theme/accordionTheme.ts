import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { extendTheme, useColorModeValue } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: 'sm',
    _focus: {
      boxShadow: 'outline',
    },
  }),
});

// Defining a custom variant called outline
const outline = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  const bgColor = useColorModeValue('light.200', 'dark.100');
  return {
    container: {
      border: 'none',
      background: bgColor,
      borderRadius: '.25rem .25rem 0 0',
      margin: '0',
    },
    button: {
      fontSize: '14px',
      fontWeight: 'semi-bold',
      padding: '.75rem 1.25rem',
    },
  };
});

const variants = {
  outline,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
