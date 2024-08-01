import { styled } from 'styled-components';

export const PixelContainer = styled.div`
  position: relative;
  box-shadow:
    4px 0 ${({ theme }) => theme.primaryBg},
    -4px 0 ${({ theme }) => theme.primaryBg},
    0 -4px ${({ theme }) => theme.primaryBg},
    0 4px ${({ theme }) => theme.primaryBg},
    8px 0 ${({ theme }) => theme.primaryText},
    -8px 0 ${({ theme }) => theme.primaryText},
    0 -8px ${({ theme }) => theme.primaryText},
    0 8px ${({ theme }) => theme.primaryText},
    0 0 0 4px ${({ theme }) => theme.primaryText};
  margin: 8px auto;
`;

export const PixelBalloon = styled(PixelContainer)`
  &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    height: 4px;
    width: 4px;
    top: -8px;
    left: 64px;
    box-shadow:
      -16px -4px ${({ theme }) => theme.primaryText},
      -16px -8px ${({ theme }) => theme.primaryText},
      -16px -12px ${({ theme }) => theme.primaryText},
      -16px -16px ${({ theme }) => theme.primaryText},
      -12px -12px ${({ theme }) => theme.primaryText},
      -8px -8px ${({ theme }) => theme.primaryText},
      -4px -4px ${({ theme }) => theme.primaryText},
      -4px 0px ${({ theme }) => theme.primaryBg},
      -8px 0px ${({ theme }) => theme.primaryBg},
      -12px 0px ${({ theme }) => theme.primaryBg},
      -4px 1px ${({ theme }) => theme.primaryBg},
      -8px 1px ${({ theme }) => theme.primaryBg},
      -12px 1px ${({ theme }) => theme.primaryBg};
  }
`;

export const PageContainer = styled.div`
  margin: 104px 72px 48px 72px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    margin: 104px 32px 48px 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 104px 24px 48px 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 104px 16px 48px 16px;
  }
`;

export const Tooltip = styled(PixelContainer)`
  visibility: hidden;
  position: absolute;
  right: 0;
  bottom: 29px;
  z-index: 1;
  width: 120px;
  padding: 2px 0;
  text-align: center;
  background-color: ${(props) => props.theme.primaryBg};
`;

export const ContentLayout = styled.div`
  max-width: 1920px;
  align-self: center;
  width: 100%;
`;
