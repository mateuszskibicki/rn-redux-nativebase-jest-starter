import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const HomeScreen: React.FunctionComponent<any> = ({
  navigation
}): JSX.Element => {
  return (
    <MainLayout headerTitle={"HomeScreen"}>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Home screen!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Second")}
        >
          <Text>Go to second</Text>
        </Button>
      </Content>
    </MainLayout>
  );
};

export default HomeScreen;
