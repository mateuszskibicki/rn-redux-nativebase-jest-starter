import React from "react";
import { Text, Header, Body, Right, Button, Icon } from "native-base";

const HeaderTop = (): JSX.Element => {
  return (
    <Header>
      <Body>
        <Text style={{ fontWeight: "700", color: "#f5f5f5" }}>Hejka</Text>
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
