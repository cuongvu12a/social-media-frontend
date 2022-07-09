import chroma from 'chroma-js';

type HexToRgb = (color: string) => string

export const hexToRgb: HexToRgb = (color) => chroma(color).rgb().join(' ')
