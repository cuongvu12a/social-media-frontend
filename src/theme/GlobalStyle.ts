import { createGlobalStyle, DefaultTheme } from 'styled-components';

import { ColorDefined, getColor } from './base';
import { DatePickerStyled } from './components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>(
  ({ theme }) => [
    ColorDefined(theme),
    `
    #root{
      height: 100%;
    }
    html, body{
      font-family: 'Montserrat', sans-serif;
    }
    a:hover{
      color: ${getColor('info')};
    }
    `,
    DatePickerStyled(),
  ]
);
