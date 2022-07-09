import { resources, defaultNS } from './i18n';

import { LANGUAGES } from '@src/constants';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.en;
  }
}
