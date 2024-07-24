import 'styled-components';
import { Theme } from 'app/providers/themeProvider';
type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
