import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import { JobsProvider } from '@/contexts/JobsContext/JobsContext';

import theme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={inter.className}>
        <JobsProvider>
          <Component {...pageProps} />
        </JobsProvider>
      </main>
    </ChakraProvider>
  );
}
