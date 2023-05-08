import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "expo/AppEntry";
import Todo from "./src/Todo/todo";
import ProfileScreen from "./src/Profile/ProfileScreen";
import EditProfile from "./src/Profile/EditProfile";
import Leaderboard from "./src/Run/Run";
import Timer from "./src/Run/Timer";
import SignIn from "./src/signIn";
import SignUp from "./src/signUp";

import Settings from "./src/settings";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          labeled={false}
          barStyle={{ backgroundColor: "grey" }}
          activeColor="white"
        >
          <Tab.Screen name="MY APPS" component={Todo} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Edit Profile" component={EditProfile} />
          <Tab.Screen name="Run" component={Leaderboard} />
          <Tab.Screen name="Timer" component={Timer} />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>
  );
}
