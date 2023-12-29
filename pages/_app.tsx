import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from "axios";

import theme from '../theme/theme';

import '../styles/globals.css';
import { setupInterceptorsTo } from '../src/services/interceptor';
import Head from 'next/head';

const queryClient = new QueryClient()
setupInterceptorsTo(axios);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Chatvia</title>
    </Head>
    <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'top-right', isClosable: true } }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
    </ChakraProvider>
    </>
  );
}
