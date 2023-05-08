import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Splash from "./components/Splash";
import ProfileScreen from "./components/ProfileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Splash /> */}
      <ProfileScreen />
      <StatusBar style="auto" />
    </View>
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
