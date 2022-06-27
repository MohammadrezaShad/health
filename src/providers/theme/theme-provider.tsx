import React from 'react';
import {useCookies} from 'react-cookie';
import {CssBaseline} from '@mui/material';
import {StyledEngineProvider, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {StyleSheetManager, ThemeProvider as StyleComponentThemeProvider} from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';

import {theme as MTheme} from '@/providers/theme/ui-theme';
import CookiesName from '@/src/constants/cookies-name';
import {ThemeTypes} from '@/src/constants/theme-types';
import ThemeContext from '@/src/contexts/theme-context';
import GlobalStyle from '@/src/styles/global-styles';
import {ThemeType} from '@/src/types/main';

export const ThemeProvider = ({children}: React.PropsWithChildren<unknown>) => {
  const [cookies, setCookie] = useCookies([CookiesName.Theme]);
  const [theme, setTheme] = React.useState(cookies[CookiesName.Theme] || ThemeTypes.LIGHT);

  const toggleTheme = React.useCallback(async () => {
    if (theme === ThemeTypes.LIGHT) {
      setTheme(ThemeTypes.DARK);
      setCookie(CookiesName.Theme, ThemeTypes.DARK);
    } else {
      setTheme(ThemeTypes.LIGHT);
      setCookie(CookiesName.Theme, ThemeTypes.LIGHT);
    }
  }, [setCookie, theme]);

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  const getTheme = (themeName: ThemeType) => {
    switch (themeName) {
      case ThemeTypes.DARK:
        return MTheme;
      default:
        return MTheme;
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={getTheme(theme)}>
          <StyleComponentThemeProvider theme={getTheme(theme)}>
            <StyleSheetManager stylisPlugins={[rtlPlugin as any]}>{children}</StyleSheetManager>
            <GlobalStyle />
            <CssBaseline />
          </StyleComponentThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};
