import { ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'shared/assets/icons/play.svg';

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>HACKER NEWS</Title> <Logo />
      </TitleContainer>
      {children}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 80px;
  padding: 16px 32px;
  background-color: ${(props) => props.theme.primaryBg};
  border-bottom: 4px solid ${(props) => props.theme.primaryText};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    align-items: end;
    svg {
      height: 40px;
      width: 40px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
    svg {
      display: none;
    }
  }
`;

const Title = styled.h1`
  user-select: none;
  font-size: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

export default Header;
