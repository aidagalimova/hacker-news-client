import styled from 'styled-components';
import RefreshIcon from 'shared/assets/icons/refreshIcon.svg?react';

export enum IconSize {
  Small = 'small',
  Middle = 'middle',
}

interface RefreshProps {
  isFetching: boolean;
  size?: IconSize;
  handleClick: () => void;
}

export const Refresh = ({ isFetching, handleClick, size = IconSize.Middle }: RefreshProps) => {
  return (
    <Spin onClick={handleClick} size={size} disabled={isFetching}>
      <RefreshIcon />
    </Spin>
  );
};

const Spin = styled.button<{ size: IconSize }>`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};

  svg {
    width: ${(props) => (props.size === IconSize.Middle ? '32px' : '20px')};
    height: ${(props) => (props.size === IconSize.Middle ? '32px' : '20px')};
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
