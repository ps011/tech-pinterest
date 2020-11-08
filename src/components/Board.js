import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'grommet';
import * as Icons from 'grommet-icons'
const Board = () => {
    return <Card  height="small" width="small" background="light-1">
    <CardHeader pad="medium">Header</CardHeader>
    <CardBody pad="medium">Body</CardBody>
    <CardFooter pad={{horizontal: "small"}} background="light-2">   
    <Button
    icon={<Icons.Favorite color="red" />}
    hoverIndicator
  />
  <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  </CardFooter>
</Card>
}

export default Board;