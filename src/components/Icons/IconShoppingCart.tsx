import Icon from '@ant-design/icons';

export const IconShoppingCart = (props: any) => {
  return <Icon component={IconShoppingCartSvg} {...props} />;
};

const IconShoppingCartSvg = () => (
  <svg
    className='w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.18032 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.6274 5 24.0998 5.57104 23.9823 6.18733L22.3808 14.5848C22.0977 16.0102 20.8338 17.0277 19.4 17L9.69916 16.9998C8.24624 17.0277 6.98227 16.0102 6.69945 14.5863L5.02879 6.23921C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2ZM7 21.0016C7 22.2026 7.79935 23.0033 8.99837 23.0033C10.1974 23.0033 10.9967 22.2026 10.9967 21.0016C10.9967 19.8007 10.1974 19 8.99837 19C7.79935 19 7 19.8007 7 21.0016ZM18 21C18 22.2 18.7993 23 19.9984 23C21.1974 23 21.9967 22.2 21.9967 21C21.9967 19.8 21.1974 19 19.9984 19C18.7993 19 18 19.8 18 21ZM8.66084 14.1952L7.22073 7H21.7913L20.4177 14.2027C20.3248 14.6703 19.9035 15.0095 19.4192 15.0002L9.68 15C9.17653 15.0095 8.75521 14.6703 8.66084 14.1952Z'
      fill='currentColor'
    />
    <mask
      id='mask0_1_113055'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.18032 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.6274 5 24.0998 5.57104 23.9823 6.18733L22.3808 14.5848C22.0977 16.0102 20.8338 17.0277 19.4 17L9.69916 16.9998C8.24624 17.0277 6.98227 16.0102 6.69945 14.5863L5.02879 6.23921C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2ZM7 21.0016C7 22.2026 7.79935 23.0033 8.99837 23.0033C10.1974 23.0033 10.9967 22.2026 10.9967 21.0016C10.9967 19.8007 10.1974 19 8.99837 19C7.79935 19 7 19.8007 7 21.0016ZM18 21C18 22.2 18.7993 23 19.9984 23C21.1974 23 21.9967 22.2 21.9967 21C21.9967 19.8 21.1974 19 19.9984 19C18.7993 19 18 19.8 18 21ZM8.66084 14.1952L7.22073 7H21.7913L20.4177 14.2027C20.3248 14.6703 19.9035 15.0095 19.4192 15.0002L9.68 15C9.17653 15.0095 8.75521 14.6703 8.66084 14.1952Z'
        fill='currentColor'
      />
    </mask>
    <g mask='url(#mask0_1_113055)'>
      <rect width={24} height={24} />
    </g>
  </svg>
);