import React from "react";
import { Title, Header, Body, Right, Button, Icon } from "native-base";

interface IProps {
  title: String;
}

const HeaderTop: React.FunctionComponent<IProps> = ({
  title
}: IProps): JSX.Element => {
  return (
    <Header>
      <Body>
        <Title>{title ? title : "NO HEADER NAME"}</Title>
      </Body>
      <Right>
        <Button rounded transparent onPress={(): void => console.log(1234)}>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderTop;
