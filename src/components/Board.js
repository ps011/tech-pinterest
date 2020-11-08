import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
} from "grommet";
import * as Icons from "grommet-icons";
import { useRouteMatch, useHistory } from "react-router-dom";

const Board = (props) => {
  let { path } = useRouteMatch();
  let history = useHistory();

  const redirect = (id) => {
    console.log(id);
    history.push(`${path}/pins`);
  };

  return (
    <Card
      height="small"
      width="small"
      background="light-1"
      style={{ display: "inline-block", margin: "22px" }}
      onClick={redirect.bind(this, props.id)}>
      <CardHeader pad="small">
        <Heading level={3}>{props.name}</Heading>
      </CardHeader>
      <CardBody pad="xsmall">
        <Text>{props.category}</Text>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Icons.Favorite color="red" />} hoverIndicator />
        <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default Board;
