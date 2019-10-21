/**
|--------------------------------------------------
| Main imports
|--------------------------------------------------
*/
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

/**
|--------------------------------------------------
| screens
|--------------------------------------------------
*/
import Screens from "../screens";

const LoginStack = createStackNavigator({
  Login: Screens.LoginScreen
});

const HomeStack = createStackNavigator({
  Home: Screens.HomeScreen,
  Second: Screens.SecondScreen
});

const SettingsStack = createStackNavigator({
  Settings: Screens.SettingsScreen
});

const HomeStackBottomNav = createMaterialBottomTabNavigator(
  {
    HomeStack,
    SettingsStack
  },
  {
    initialRouteName: "HomeStack",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Homne: HomeStackBottomNav
    },
    {
      initialRouteName: "Login"
    }
  )
);
