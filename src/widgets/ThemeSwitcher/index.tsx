import { styled } from 'styled-components';
import { ReactComponent as Moon } from 'shared/assets/icons/moon.svg';
import { ReactComponent as Sun } from 'shared/assets/icons/sun.svg';
import { Theme } from 'shared/hooks/useTheme';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeSwitcher = ({ theme, toggleTheme }: ThemeSwitcherProps) => {
  return <IconContainer onClick={() => toggleTheme()}>{theme === Theme.Dark ? <Moon /> : <Sun />}</IconContainer>;
};

const IconContainer = styled.div`
  cursor: pointer;
  svg {
    width: 48px;
    height: 48px;
  }
`;
