import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  name: string;
  value: string;
}

const DataList = ({ name, value }: IProps) => {
  return (
    <Box my="1rem">
      <Text fontSize="15px" color="gray.500" mb="0.25rem">
        {name}
      </Text>
      <Text fontSize="14px" fontWeight="semibold">
        {value}
      </Text>
    </Box>
  );
};

export default DataList;
