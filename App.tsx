import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { StatusBar } from "react-native";
import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import AppContainer from "./src/screens";

//store
import configureStore from "./src/store/store";
const reduxStore = configureStore();

export default class App extends React.Component {
  state = {
    loading: true
  };

  setLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  loadAsyncAssets = async (): Promise<void> => {
    try {
      await Promise.all([
        Font.loadAsync(FontAwesome5.font),
        Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
      ]);
      this.setLoading();
    } catch (err) {
      this.setLoading();
    }
  };

  componentDidMount() {
    this.loadAsyncAssets();
  }

  render() {
    if (this.state.loading) return <AppLoading />;

    return (
      <ReduxProvider store={reduxStore}>
        <Root>
          <StatusBar hidden={true} />
          <AppContainer />
        </Root>
      </ReduxProvider>
    );
  }
}
