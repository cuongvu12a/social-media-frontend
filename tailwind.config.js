/** @type {import('tailwindcss').Config}*/

const MAP_COLOR_CSS_VARIABLE = [
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

const getColorToTailwind = () => {
  const result = {};
  MAP_COLOR_CSS_VARIABLE.forEach((color) => {
    result[color.value] = `rgba(var(${color?.name}) / <alpha-value>)`;
  });
  return result;
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: getColorToTailwind(),
  },
  plugins: [],
};
