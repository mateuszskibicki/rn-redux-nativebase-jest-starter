import React from "react";
import { Button, Body, Content, Text, Card, CardItem, Icon } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const HomeScreen: any = ({ navigation }): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Home screen!!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          onPress={() => navigation.push("Second")}
        >
          <Text>Go to second</Text>
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
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home !",
    headerRight: () => (
      <Icon
        type="MaterialCommunityIcons"
        name="logout"
        onPress={() => {
          navigation.navigate("AuthLogout");
        }}
      />
    )
  };
};

export default HomeScreen;
