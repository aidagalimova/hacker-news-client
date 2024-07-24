import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import router from './router';
import store from './store';
import { GlobalStyles, lightTheme, darkTheme } from './theme';
import Header from 'widgets/Header';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Theme, useTheme } from 'shared/hooks/useTheme';
import './App.scss';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme === Theme.Light ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </Header>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
