import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Content } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

export interface IProps {
  navigation: any;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const LogoutScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  const logout = async (): Promise<any> => {
    await AsyncStorage.removeItem("token");
    const token = await AsyncStorage.getItem("token");
    navigation.navigate(token ? "Home" : "Auth");
  };

  useEffect((): void => {
    logout();
  });

  return (
    <MainLayout>
      <Content padder centerContent>
        <ActivityIndicator size="large" color="#0000ff" />
      </Content>
    </MainLayout>
  );
};

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
LogoutScreen.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

export default LogoutScreen;
