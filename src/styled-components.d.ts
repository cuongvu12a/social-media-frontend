import 'styled-components';

declare module 'styled-components' {
  export type Palette = 'primary' | 'success' | 'warning' | 'danger' | 'info';

  export type TextColors =
    | 'text.primary'
    | 'text.secondary'
    | 'text.placeholder';

  export type BgColors = 'bg.body' | 'bg.section' | 'bg.table-header';

  export type ColorType =
    | Palette
    | TextColors
    | BgColors
    | 'divider'
    | 'border';

  export type ColorCssVariable = {
    name: string;
    value: ColorType;
  };

  export interface DefaultTheme {
    colors: Record<ColorType, string>;
  }
}
