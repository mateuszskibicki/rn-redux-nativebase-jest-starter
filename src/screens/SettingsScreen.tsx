import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const SettingsScreen: any = ({ navigation }): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Settings screen!</Text>
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

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
SettingsScreen.navigationOptions = {
  title: "Settings !"
};

export default SettingsScreen;
