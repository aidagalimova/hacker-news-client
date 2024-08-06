import styled from 'styled-components';

export const Loader = () => {
  return (
    <Spin>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Spin>
  );
};

const Spin = styled.div`
  span {
    display: inline-block;
    vertical-align: middle;
    width: 0.6em;
    height: 0.6em;
    margin: 0.19em;
    background: #c9c9c9;
    animation: loading 0.7s infinite linear;
    &:nth-of-type(2) {
      filter: brightness(0.4);
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      filter: brightness(0.5);
      animation-delay: 0.3s;
    }
    &:nth-of-type(4) {
      filter: brightness(0.6);
      animation-delay: 0.4s;
    }
    &:nth-of-type(5) {
      filter: brightness(0.7);
      animation-delay: 0.5s;
    }
    &:nth-of-type(6) {
      filter: brightness(0.8);
      animation-delay: 0.6s;
    }
    &:nth-of-type(7) {
      filter: brightness(0.9);
      background: ${({ theme }) => theme.primaryText};
      animation-delay: 0.7s;
    }
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
