import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const SecondScreen: any = ({ navigation }): JSX.Element => {
  return (
    <MainLayout>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Second screen!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          style={{ marginTop: 10 }}
          onPress={() => navigation.push("Home")}
        >
          <Text>Go to home</Text>
        </Button>
      </Content>
    </MainLayout>
  );
};

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
SecondScreen.navigationOptions = {
  title: "Second !"
};

export default SecondScreen;
