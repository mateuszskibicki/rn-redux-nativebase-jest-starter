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

// loading stack
const AuthLoadingStack = createStackNavigator({
  Loading: Screens.AuthLoadingScreen
});

// logout stack
const AuthLogoutStack = createStackNavigator({
  Logout: Screens.LogoutScreen
});

// auth stack -> login/logout and register
const AuthStack = createStackNavigator({
  Login: Screens.LoginScreen
});

// TODO LogoutScreen / AuthLoadingStack and Screen

// app stack -> the rest here
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
      AuthLoading: AuthLoadingStack,
      AuthLogout: AuthLogoutStack,
      Auth: AuthStack,
      Home: HomeStackBottomNav
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
