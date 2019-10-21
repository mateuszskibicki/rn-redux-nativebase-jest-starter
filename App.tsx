/**
|--------------------------------------------------
| React and Redux imports
|--------------------------------------------------
*/
import React, { useState, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";

/**
|--------------------------------------------------
| All expo/native-base imports
|--------------------------------------------------
*/
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import { Root } from "native-base";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

/**
|--------------------------------------------------
| Faster screens
|--------------------------------------------------
*/
import { useScreens } from "react-native-screens";
useScreens();

/**
|--------------------------------------------------
| App container -> react-navigation
|--------------------------------------------------
*/
import AppNavigator from "./src/components/navigator/AppNavigator";

/**
|--------------------------------------------------
| Redux store
|--------------------------------------------------
*/
import configureStore from "./src/store/store";
const reduxStore = configureStore();

/**
|--------------------------------------------------
| Component and logic
|--------------------------------------------------
*/
const App: React.FunctionComponent<any> = (): JSX.Element => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);

  // async await grab assets
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
      //setError('Something went wrong') TODO
      setLoading(false);
    }
  };

  // grab assets on start
  useEffect((): void => {
    loadAsyncAssets();
  }, []);

  // if loading -> app loading component
  if (loading) return <AppLoading />;

  // return main component
  return (
    <ReduxProvider store={reduxStore}>
      <Root>
        <StatusBar hidden={true} />
        <AppNavigator />
      </Root>
    </ReduxProvider>
  );
};

export default App;
