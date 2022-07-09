import Icon from '@ant-design/icons';

export const SocialFacebook = (props: any) => {
  return <Icon component={SocialFacebookSvg} {...props} />;
};

const SocialFacebookSvg = () => (
  <svg
    width={31}
    height={30}
    viewBox='0 0 31 30'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.65625' width={30} height={30} rx={6} fill='#3B5998' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.7168 11.5C19.7168 11.85 19.4841 12.0834 19.1352 12.0834H17.3905V13.25H19.1352C19.3097 13.25 19.4841 13.25 19.6005 13.425C19.7168 13.6 19.7749 13.775 19.7168 13.95L19.1352 16.2834C19.077 16.575 18.8444 16.75 18.5536 16.75H17.3905V20.8334C17.3905 21.1834 17.1578 21.4167 16.8089 21.4167H14.4826C14.1336 21.4167 13.901 21.1834 13.901 20.8334V16.75H12.7378C12.3889 16.75 12.1562 16.5167 12.1562 16.1667V13.8334C12.1562 13.4834 12.3889 13.25 12.7378 13.25H13.901V12.0834C13.901 10.1584 15.4712 8.58337 17.3905 8.58337H19.1352C19.4841 8.58337 19.7168 8.81671 19.7168 9.16671V11.5ZM18.3791 14.4167H16.8089C16.4599 14.4167 16.2273 14.1834 16.2273 13.8334V12.0834C16.2273 11.4417 16.7507 10.9167 17.3904 10.9167H18.5536V9.75004H17.3904C16.111 9.75004 15.0641 10.8 15.0641 12.0834V13.8334C15.0641 14.1834 14.8315 14.4167 14.4825 14.4167H13.3194V15.5834H14.4825C14.8315 15.5834 15.0641 15.8167 15.0641 16.1667V20.25H16.2273V16.1667C16.2273 15.8167 16.4599 15.5834 16.8089 15.5834H18.0883L18.3791 14.4167Z'
      fill='black'
    />
    <mask
      id='mask0_0_15320'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x={12}
      y={8}
      width={8}
      height={14}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.7168 11.5C19.7168 11.85 19.4841 12.0834 19.1352 12.0834H17.3905V13.25H19.1352C19.3097 13.25 19.4841 13.25 19.6005 13.425C19.7168 13.6 19.7749 13.775 19.7168 13.95L19.1352 16.2834C19.077 16.575 18.8444 16.75 18.5536 16.75H17.3905V20.8334C17.3905 21.1834 17.1578 21.4167 16.8089 21.4167H14.4826C14.1336 21.4167 13.901 21.1834 13.901 20.8334V16.75H12.7378C12.3889 16.75 12.1562 16.5167 12.1562 16.1667V13.8334C12.1562 13.4834 12.3889 13.25 12.7378 13.25H13.901V12.0834C13.901 10.1584 15.4712 8.58337 17.3905 8.58337H19.1352C19.4841 8.58337 19.7168 8.81671 19.7168 9.16671V11.5ZM18.3791 14.4167H16.8089C16.4599 14.4167 16.2273 14.1834 16.2273 13.8334V12.0834C16.2273 11.4417 16.7507 10.9167 17.3904 10.9167H18.5536V9.75004H17.3904C16.111 9.75004 15.0641 10.8 15.0641 12.0834V13.8334C15.0641 14.1834 14.8315 14.4167 14.4825 14.4167H13.3194V15.5834H14.4825C14.8315 15.5834 15.0641 15.8167 15.0641 16.1667V20.25H16.2273V16.1667C16.2273 15.8167 16.4599 15.5834 16.8089 15.5834H18.0883L18.3791 14.4167Z'
        fill='white'
      />
    </mask>
    <g mask='url(#mask0_0_15320)'>
      <rect x='8.65625' y={8} width={14} height={14} fill='white' />
    </g>
  </svg>
);