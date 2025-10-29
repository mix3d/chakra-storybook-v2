import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { useCommerce } from './useCommerce';
// import { api } from 'utils/api';

interface Props {
  children: JSX.Element;
}

export const IntlProvider = ({ children }: Props) => {
  const { locale } = useCommerce();
  // const { data: intlConfig } = api.config.intl.useQuery()
  // const messages = intlConfig?.find((el) => el.locale === locale)

  return (
    <ReactIntlProvider
      locale={locale ?? ''}
      messages={{}}
    >
      {children}
    </ReactIntlProvider>
  );
};
