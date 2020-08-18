import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import NoteScreen from "./src/screens/NoteScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Notes: NoteScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
