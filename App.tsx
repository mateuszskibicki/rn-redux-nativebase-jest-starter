import React, { useState, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { StatusBar } from "react-native";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import AppContainer from "./src/screens";

//strone
import configureStore from "./src/store/store";
const reduxStore = configureStore();

export default function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const loadAsyncAssets = async (): Promise<void> => {
    try {
      await Promise.all([
        Font.loadAsync(FontAwesome5.font),
        Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
      ]);
      setLoading(false);
    } catch (err) {
      setLoading(true);
    }
  };

  useEffect((): void => {
    loadAsyncAssets();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <ReduxProvider store={reduxStore}>
      <Root>
        <StatusBar hidden={true} />
        <AppContainer />
      </Root>
    </ReduxProvider>
  );
}
