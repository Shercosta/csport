import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./components/Splash";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./components/ProfileScreen";
import EditProfile from "./components/EditProfile";
import SplashScreen from "react-native-splash-screen";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7642AC",
    alignItems: "center",
    justifyContent: "center",
  },
});
