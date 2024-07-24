import styled from 'styled-components';
import { ReactComponent as RefreshIcon } from 'shared/assets/icons/refreshIcon.svg';

export enum IconSize {
  Small = 'small',
  Middle = 'middle',
}

interface RefreshProps {
  size?: IconSize;
  handleClick: () => void;
}

export const Refresh = ({ size, handleClick }: RefreshProps) => {
  return (
    <Spin onClick={handleClick} className={`${size ? size : ''}`}>
      <RefreshIcon />
    </Spin>
  );
};

const Spin = styled.div`
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
  }
  &.small {
    svg {
      width: 20px;
      height: 20px;
    }
  }
  &:hover {
    animation: rotate 3s 1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
