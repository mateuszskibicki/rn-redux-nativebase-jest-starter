import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
// import stylesMain from "../constants/stylesMain";
// import { colors, shadows, font } from "../constants/stylesMain";

const LoginScreen: any = ({ navigation }): JSX.Element => {
  const onNavigate = () => {
    navigation.navigate("Home");
  };

  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Login screenn</Text>
              <Text>Login screenn</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          info
          rounded
          style={{ marginTop: 10 }}
          onPress={onNavigate}
        >
          <Text>Login -> go home</Text>
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
LoginScreen.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

export default LoginScreen;
