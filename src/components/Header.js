import React from 'react';
import { Header as Head, Button, Menu } from 'grommet';
import { Home } from 'grommet-icons';

const Header = () => {
    return (<Head 
    background="brand" 
    height="xsmall"
    pad="medium">
    <Button icon={<Home />} hoverIndicator />
    <Menu label="account" items={[{ label: 'logout' }]} />
  </Head>)
}

export default Header;