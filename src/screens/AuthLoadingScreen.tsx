import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Content } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

const AuthLoadingScreen: any = ({ navigation }: any): JSX.Element => {
  const checkToken = async (): Promise<any> => {
    const token = await AsyncStorage.getItem("token");
    navigation.navigate(token ? "Home" : "Auth");
  };

  useEffect((): void => {
    checkToken();
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
AuthLoadingScreen.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};

export default AuthLoadingScreen;
