import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Second: { screen: SecondScreen }
  },

  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
