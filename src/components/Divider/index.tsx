import { styled, getColor } from '@src/theme';

interface DividerProps {
  containerClass?: string;
  content?: string;
}

export const Divider = ({ containerClass, content }: DividerProps) => {
  if (!content)
    return (
      <div
        className={`${containerClass || ''} w-full h-[1px] bg-divider`}
      ></div>
    );
  return (
    <DividerWrapper
      className={`${
        containerClass || ''
      } relative text-center text-text.primary`}
    >
      {content}
    </DividerWrapper>
  );
};

const DividerWrapper = styled.div`
  &:after,
  &:before {
    content: '';
    height: 1px;
    width: calc(50% - 20px);
    background: ${getColor('divider')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:after {
    left: 0;
  }
  &:before {
    right: 0;
  }
`;
