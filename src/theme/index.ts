import { extendTheme, Theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode('gray.100', 'gray.900')(props),
        fontFamily: 'system-ui'
      }
    })
  }
}) as Theme;
