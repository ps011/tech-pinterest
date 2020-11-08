import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Anchor } from 'grommet';
import * as Icons from 'grommet-icons'
import { Link, useRouteMatch } from 'react-router-dom';

const Pin = props => {
  let { path } = useRouteMatch();
    return <Card
    height="small" 
    width="small" 
    background="pin"
    style={{ display: "inline-block", margin: "22px" }}>
    <CardHeader pad="medium">{props.name}</CardHeader>
    <CardBody pad="medium"><Anchor href={props.url} target="_blank" label="View Pin"></Anchor></CardBody>
    <CardFooter pad={{horizontal: "small", vertical: "xsmall"}} background="light-2">   
    <Button
    icon={<Icons.Favorite color="red" />}
    hoverIndicator
  />
  <Link to={`${path}/2`}>
  <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  </Link>
  </CardFooter>
</Card>
}

export default Pin;