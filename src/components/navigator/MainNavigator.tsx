import React from "react";
import { View, Text } from "react-native";
import { Content } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class HomeScreen extends React.Component {
  render() {
    return (
      <Content padder>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Home Screen</Text>
        </View>
      </Content>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
