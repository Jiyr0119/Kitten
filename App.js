import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json'; // <-- Import app theme
import {default as mapping} from './mapping.json'; // <-- Import app mapping
import {EvaIconsPack} from '@ui-kitten/eva-icons';
// import {FeatherIconsPack} from '@src/icons/feather-icons';
import {AppNavigator} from './src/navigations/navigations';
import {ThemeContext} from './theme-context';
// import LoginButton from 'src/components/loginButton';
// console.log(FeatherIconsPack);
console.log(AppNavigator);

export default () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider
          {...eva}
          theme={eva[theme]}
          customMapping={mapping}>
          <AppNavigator />
          {/* <LoginButton /> */}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
