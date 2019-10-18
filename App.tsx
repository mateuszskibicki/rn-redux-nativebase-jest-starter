import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Container, Content, Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

import Header from "./src/components/layout/header/Header";
import AppNavigator from "./src/components/navigator/AppNavigator";
import Footer from "./src/components/layout/footer/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const loadAsyncAssets = async () => {
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

  useEffect(() => {
    loadAsyncAssets();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <Root>
      <Container style={{ backgroundColor: "#f5f5f5" }}>
        <StatusBar hidden={true} />
        <Header />
        <Content padder>
          <AppNavigator />
        </Content>
        <Footer />
      </Container>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyles: {
    fontSize: 40,
    textAlign: "center"
  }
});
