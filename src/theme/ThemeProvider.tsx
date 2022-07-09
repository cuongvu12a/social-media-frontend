import React, { useState, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';

type Mode = 'light' | 'dark';
type Theme = Record<Mode, DefaultTheme>;
interface IThemeProviderProps {
  children: React.ReactNode;
}
interface ValueModeContext {
  mode: Mode;
  switchMode: () => void;
}

const theme: Theme = {
  light: {
    colors: {
      primary: '#7367f0',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
      info: '#00CFE8',
      'text.primary': '#6E6B7B',
      'text.secondary': '#5E5873',
      'text.placeholder': '#B9B9C3',
      'bg.body': '#F8F8F8',
      'bg.section': '#FFFFFF',
      'bg.table-header': '#f3f2f7',
      divider: '#E9EAEC',
      border: 'D8D6DE',
    },
  },
  dark: {
    colors: {
      primary: '#7367f0',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
      info: '#00CFE8',
      'text.primary': '#B4B7BD',
      'text.secondary': '#D0D2D6',
      'text.placeholder': '#B9B9C3',
      'bg.body': '#161D31',
      'bg.section': '#283046',
      'bg.table-header': '#343d55',
      divider: '#3B4253',
      border: '#404656',
    },
  },
};

const ModeContext = React.createContext<ValueModeContext>({
  mode: 'light',
  switchMode: () => {},
});

export default ({ children }: IThemeProviderProps) => {
  const [currentMode, setCurrentMode] = useState<Mode>('light');

  const switchMode = () => {
    const result = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(result);
  };

  return (
    <ModeContext.Provider
      value={{
        mode: currentMode,
        switchMode,
      }}
    >
      <ThemeProvider theme={theme[currentMode]}>
        <div className={`${currentMode} h-full`}>{children}</div>
        <GlobalStyle theme={theme[currentMode]} />
      </ThemeProvider>
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);
