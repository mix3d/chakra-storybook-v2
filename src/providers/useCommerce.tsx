import * as React from 'react';
import { EcommerceContext } from './Ecommerce';

export const useCommerce = () => {
  const context = React.useContext(EcommerceContext);
  if (context === undefined) {
    throw new Error('useCommerce must be used within a EcommerceProvider');
  }
  return context;
};
