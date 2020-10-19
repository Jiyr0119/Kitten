import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Button} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json'; // <-- Import app theme
import {default as mapping} from './mapping.json'; // <-- Import app mapping

export default () => (
  <ApplicationProvider
    {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button>HOME</Button>
    </Layout>
  </ApplicationProvider>
);
