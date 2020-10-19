import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json'; // <-- Import app theme
import {default as mapping} from './mapping.json'; // <-- Import app mapping
import {EvaIconsPack} from '@ui-kitten/eva-icons';
// import {FeatherIconsPack} from '@src/icons/feather-icons';
import {AppNavigator} from './src/navigations/navigations';
import LoginButton from 'src/components/loginButton';
// console.log(FeatherIconsPack);
console.log(AppNavigator);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{...eva.dark, ...theme}}
      customMapping={mapping}>
      {/* <AppNavigator /> */}
      <LoginButton />
    </ApplicationProvider>
  </>
);
