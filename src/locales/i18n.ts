import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './langs/en';
import vi from './langs/vi';
import { LANGUAGES } from '@src/models';
import { Module } from '@src/models';

type Namespace = 'translation';

export const defaultNS: Namespace = 'translation';
export const resources: Record<
  LANGUAGES,
  Record<Namespace, Record<Module, Record<string, string>>>
> = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
} as const;

const NAMESPACES: Namespace[] = ['translation'];

i18n.use(initReactI18next).init({
  lng: LANGUAGES.EN,
  ns: NAMESPACES,
  defaultNS,
  resources,
});

export default i18n;
