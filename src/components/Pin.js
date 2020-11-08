import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'grommet';
import * as Icons from 'grommet-icons'
import { Link, useRouteMatch } from 'react-router-dom';

const Pin = props => {
  let { path, url } = useRouteMatch();
    return <Card  height="small" width="small" background="light-1">
    <CardHeader pad="medium">Pin Header</CardHeader>
    <CardBody pad="medium">Pin Body</CardBody>
    <CardFooter pad={{horizontal: "small"}} background="light-2">   
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