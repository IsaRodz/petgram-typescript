import { extendTheme, Theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/nunito';

const colors = {
  brand: {
    orange: '#ffb74d'
  }
};

export default extendTheme({
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode('gray.100', 'gray.900')(props),
        fontFamily: 'Nunito, system-ui'
      }
    })
  }
}) as Theme;
