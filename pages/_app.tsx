import type {AppProps} from 'next/app';
import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Layout from '../src/components/layout/main';

function Website({Component, pageProps, router}: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
