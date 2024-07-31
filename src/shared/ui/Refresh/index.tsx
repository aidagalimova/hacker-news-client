import styled from 'styled-components';
import { ReactComponent as RefreshIcon } from 'shared/assets/icons/refreshIcon.svg';

export enum IconSize {
  Small = 'small',
  Middle = 'middle',
}

interface RefreshProps {
  isFetching: boolean;
  size?: IconSize;
  handleClick: () => void;
}

export const Refresh = ({ isFetching, size, handleClick }: RefreshProps) => {
  return (
    <Spin onClick={handleClick} className={`${size ? size : ''}`} disabled={isFetching}>
      <RefreshIcon />
    </Spin>
  );
};

const Spin = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  fill: ${({ theme }) => theme.primaryText};
  svg {
    width: 32px;
    height: 32px;
  }
  &.small {
    svg {
      fill: ${({ theme }) => theme.primaryText};
      width: 20px;
      height: 20px;
    }
  }
  &:hover {
    animation: rotate 3s 1;
  }

  &:disabled {
    cursor: default;
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
