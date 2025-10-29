import * as React from 'react';
import { useDisclosure, type UseDisclosureReturn } from '@chakra-ui/react';

export interface EcommerceContext {
  accountDrawer: UseDisclosureReturn;
  cartDrawer: UseDisclosureReturn;
  locale: string;
  menuDrawer: UseDisclosureReturn;
  setLocale: (locale: string) => void;
}

export const EcommerceContext = React.createContext<
  EcommerceContext | undefined
>(undefined);

export interface ComposableProviderProps {
  children: React.JSX.Element;
}

export const EcommerceProvider = ({ children }: ComposableProviderProps) => {
  const cartDrawer = useDisclosure();
  const menuDrawer = useDisclosure();
  const accountDrawer = useDisclosure();
  const currentLocale = FALLBACK_LOCALE;

  const setLocaleHandler = React.useCallback((locale: string) => {
    console.log('Locale changed to:', locale);
  }, []);

  return (
    <EcommerceContext.Provider
      value={{
        accountDrawer,
        cartDrawer,
        locale: currentLocale,
        menuDrawer,
        setLocale: setLocaleHandler,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

const FALLBACK_LOCALE = 'en-US';
