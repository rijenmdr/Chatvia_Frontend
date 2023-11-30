import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

interface IProps {
  date: string;
}

const ChatDate = ({ date }: IProps) => {
  const bgColor = useColorModeValue('gray.200', 'dark.100');

  const getDate = (someDate: string) => {
    let date = moment(someDate);
    if (moment().diff(date, 'days') >= 1) {
      return date.format('MMM Do'); // '2 days ago' etc.
    }
    return date.calendar(null, {
      // when the date is closer, specify custom values
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
    });
  };

  return (
    <Box position="relative" borderBottom="1px solid" borderColor={bgColor} marginY="2rem">
      <Box
        position="absolute"
        left="50%"
        transform="translate(-50%, -50%)"
        background={bgColor}
        padding="6px 12px"
        borderRadius="5px"
      >
        <Text fontSize=".75rem">{getDate(date)}</Text>
      </Box>
    </Box>
  );
};

export default ChatDate;
