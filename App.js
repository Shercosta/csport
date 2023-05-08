import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./components/Splash";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./components/ProfileScreen";
import EditProfile from "./components/EditProfile";
import SplashScreen from "react-native-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Splash />
        {/* <ProfileScreen /> */}
        {/* <EditProfile /> */}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
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
