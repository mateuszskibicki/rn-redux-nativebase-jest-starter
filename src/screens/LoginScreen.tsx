import React from "react";
import { AsyncStorage } from "react-native";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

export interface IProps {
  navigation: any;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const LoginScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  const onLogin = async (): Promise<any> => {
    await AsyncStorage.setItem("token", "abc");
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
        <Button full info rounded style={{ marginTop: 10 }} onPress={onLogin}>
          <Text>Login</Text>
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
