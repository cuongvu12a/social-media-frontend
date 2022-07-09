import {
  DefaultTheme,
  ColorType,
  ColorCssVariable,
} from 'styled-components';
import { hexToRgb } from '../functions';

type GetColorFunc = (color: ColorType, opacity?: number) => string;
type ColorDefinedFunc = (theme: DefaultTheme) => string;
type ParseColorFunc = (theme: DefaultTheme, color: ColorCssVariable) => string;

const parseColor: ParseColorFunc = (theme, { name, value }) => {
  return `${name}: ${hexToRgb(theme.colors[value])};`;
};

const MAP_COLOR_CSS_VARIABLE: ColorCssVariable[] = [
  {
    name: '--primary-color',
    value: 'primary',
  },
  {
    name: '--success-color',
    value: 'success',
  },
  {
    name: '--danger-color',
    value: 'danger',
  },
  {
    name: '--warning-color',
    value: 'warning',
  },
  {
    name: '--info-color',
    value: 'info',
  },
  {
    name: '--text-primary-color',
    value: 'text.primary',
  },
  {
    name: '--text-secondary-color',
    value: 'text.secondary',
  },
  {
    name: '--text-placeholder-color',
    value: 'text.placeholder',
  },
  {
    name: '--bg-body-color',
    value: 'bg.body',
  },
  {
    name: '--bg-section-color',
    value: 'bg.section',
  },
  {
    name: '--bg-table-header-color',
    value: 'bg.table-header',
  },
  {
    name: '--divider-color',
    value: 'divider',
  },
  {
    name: '--border-color',
    value: 'border',
  },
];

export const getColor: GetColorFunc = (color, opacity = 1) => {
  const currentColor = MAP_COLOR_CSS_VARIABLE.find((el) => el.value === color);
  return `rgba(var(${currentColor?.name}) / ${opacity})`;
};

export const ColorDefined: ColorDefinedFunc = (theme) => `
  :root {
    ${MAP_COLOR_CSS_VARIABLE.map((color) => parseColor(theme, color)).join('')}
  }
`;
