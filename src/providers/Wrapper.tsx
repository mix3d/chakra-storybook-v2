import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { EcommerceProvider } from './Ecommerce';
import { IntlProvider } from './Intl';

import '@fontsource/raleway/100.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';
import '@fontsource/dm-sans/100.css';
import '@fontsource/dm-sans/200.css';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/800.css';

export interface IntlConfig {
  locale: string;
  keys: Record<string, string>;
}

export type WrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: any;
  googleTagManagerId?: string;
  intl?: IntlConfig[];
};

export const Wrapper = ({ theme, children }: WrapperProps) => {
  return (
    <EcommerceProvider>
      <IntlProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </IntlProvider>
    </EcommerceProvider>
  );
};
