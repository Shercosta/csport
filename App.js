import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "expo/AppEntry";

import ProfileScreen from "./src/Profile/ProfileScreen";
import EditProfile from "./src/Profile/EditProfile";
import Leaderboard from "./src/Run/Run";
import Timer from "./src/Run/Timer";
import SignIn from "./src/signIn";
import SignUp from "./src/signUp";

// import Settings from "./src/settings";np
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          labeled={false}
          barStyle={{ backgroundColor: "#f34d33" }}
          activeColor="#f34d33"
        >
          {/* <Tab.Screen name="MY APPS" component={Todo} /> */}
          {/* <Tab.Screen name="Settings" component={Settings} /> */}
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Run" component={Leaderboard} />
          <Stack.Screen name="Timer" component={Timer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
