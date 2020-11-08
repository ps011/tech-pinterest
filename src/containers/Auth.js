import React from 'react';
import { Tabs, Tab, Box } from 'grommet';

const Auth = () => {
    return <Tabs>
    <Tab title="tab 1">
      <Box pad="medium">One</Box>
    </Tab>
    <Tab title="tab 2">
      <Box pad="medium">Two</Box>
    </Tab>
  </Tabs>
}

export default Auth;