import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const SecondScreen: React.FunctionComponent<any> = ({
  navigation
}): JSX.Element => {
  return (
    <MainLayout headerTitle={"SecondScreen"}>
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
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Go to home</Text>
        </Button>
      </Content>
    </MainLayout>
  );
};

export default SecondScreen;
