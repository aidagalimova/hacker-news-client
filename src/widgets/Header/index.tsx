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

const HeaderContainer = styled.div`
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
`;

const Title = styled.span`
  user-select: none;
  font-size: 32px;
`;

export default Header;
