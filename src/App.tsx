import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import useGetPosts from './hooks/useGetPosts';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Feed from './components/Feed';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Feed />
    </ChakraProvider>
  );
}
