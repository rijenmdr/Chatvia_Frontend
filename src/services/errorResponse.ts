import { createStandaloneToast } from '@chakra-ui/react'
import { AxiosError, AxiosResponse } from 'axios';
const { toast } = createStandaloneToast({
    defaultOptions: {
        position: "top-right",
        isClosable: true
    }
})

interface IError<T = any> extends AxiosError<T> {
    response?: AxiosResponse<T>;
}

export const errorResponse = (error: IError) => {
  if (error.response && error.response.data && error.response.data?.message) {
    console.error('Axios error:', error);

    toast({
      title: 'Error Occurred',
      description: error.response.data?.message,
      status: 'error'
    });
  } else {
    console.error('Unexpected error:', error);

    toast({
      title: 'Unexpected Error',
      description: 'An unexpected error occurred.',
      status: 'error',
    });
  }
};
