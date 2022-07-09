import Icon from '@ant-design/icons';

export const IconFile = (props: any) => {
  return <Icon component={IconFileSvg} {...props} />;
};

const IconFileSvg = () => (
  <svg
    className='max-w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.8 7.45C20.825 7.5 20.85 7.55 20.9 7.6C21 7.7 21 7.9 21 8V20C21 21.7 19.7 23 18 23H6C4.3 23 3 21.7 3 20V4C3 2.3 4.3 1 6 1H14C14.1 1 14.3 1 14.4 1.1C14.5 1.1 14.6 1.2 14.7 1.3L20.7 7.3C20.75 7.35 20.775 7.4 20.8 7.45ZM17.6 7L15 4.4V7H17.6ZM18 21H6C5.4 21 5 20.6 5 20V4C5 3.4 5.4 3 6 3H13V8C13 8.6 13.4 9 14 9H19V20C19 20.6 18.6 21 18 21ZM16 14C16.6 14 17 13.6 17 13C17 12.4 16.6 12 16 12H8C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14H16ZM17 17C17 17.6 16.6 18 16 18H8C7.4 18 7 17.6 7 17C7 16.4 7.4 16 8 16H16C16.6 16 17 16.4 17 17ZM8 8C7.4 8 7 8.4 7 9C7 9.6 7.4 10 8 10H10C10.6 10 11 9.6 11 9C11 8.4 10.6 8 10 8H8Z'
      fill='black'
    />
    <mask
      id='mask0_1_114135'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x={3}
      y={1}
      width={18}
      height={22}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.8 7.45C20.825 7.5 20.85 7.55 20.9 7.6C21 7.7 21 7.9 21 8V20C21 21.7 19.7 23 18 23H6C4.3 23 3 21.7 3 20V4C3 2.3 4.3 1 6 1H14C14.1 1 14.3 1 14.4 1.1C14.5 1.1 14.6 1.2 14.7 1.3L20.7 7.3C20.75 7.35 20.775 7.4 20.8 7.45ZM17.6 7L15 4.4V7H17.6ZM18 21H6C5.4 21 5 20.6 5 20V4C5 3.4 5.4 3 6 3H13V8C13 8.6 13.4 9 14 9H19V20C19 20.6 18.6 21 18 21ZM16 14C16.6 14 17 13.6 17 13C17 12.4 16.6 12 16 12H8C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14H16ZM17 17C17 17.6 16.6 18 16 18H8C7.4 18 7 17.6 7 17C7 16.4 7.4 16 8 16H16C16.6 16 17 16.4 17 17ZM8 8C7.4 8 7 8.4 7 9C7 9.6 7.4 10 8 10H10C10.6 10 11 9.6 11 9C11 8.4 10.6 8 10 8H8Z'
        fill='white'
      />
    </mask>
    <g mask='url(#mask0_1_114135)'>
      <rect width={24} height={24} />
    </g>
  </svg>
);
