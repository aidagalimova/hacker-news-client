import { Breakpoints } from './breakpoints';
import { darkTheme } from './themePallete/darkTheme';
import { lightTheme } from './themePallete/lightTheme';
import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  primaryBg: string;
  primaryText: string;
  secondaryText: string;
  secondaryBg: string;
  secondaryHover: string;
  link: string;
  visitedLink: string;
  breakpoints: typeof Breakpoints;
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }
  
  body {
    background: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    font-family: 'PressStart2P', sans-serif;
  }

  a {  
    color: ${({ theme }) => theme.link};
    
    &:hover{
      filter: brightness(0.6);
    }

    &:visited{
      color: ${({ theme }) => theme.visitedLink};
    }
  }
`;

export { lightTheme, darkTheme, GlobalStyles };
export type { ThemeProps };
