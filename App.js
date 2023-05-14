import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./components/Splash";
// import SignIn from "./src/signIn";
// import SignUp from "./src/signUp";
import ProfileScreen from "./src/Profile/ProfileScreen";
import EditProfile from "./src/Profile/EditProfile";
=======
// import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./components/Splash";
import SignIn from "./src/signIn";
import SignUp from "./src/signUp";
import ProfileScreen from "./components/ProfileScreen";
import EditProfile from "./components/EditProfile";
import Running from "./components/Running";
import StartRunning from "./components/StartRunning";
import Leaderboard from "./components/Leaderboard";
import Workout from "./components/Workout";
>>>>>>> 98cb62cc92c590dc61e9f2856d9b1064b0002d67

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
<<<<<<< HEAD
      <Stack.Navigator>
=======
      <Stack.Navigator initialRouteName="SignIn">
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
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
>>>>>>> 98cb62cc92c590dc61e9f2856d9b1064b0002d67
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
<<<<<<< HEAD
          name="Profile"
          component={ProfileScreen}
=======
          name="Running"
          component={Running}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartRunning"
          component={StartRunning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Workout"
          component={Workout}
>>>>>>> 98cb62cc92c590dc61e9f2856d9b1064b0002d67
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    // <Text>Open up App.js to start working on your app!</Text>
    //  <Splash />
    //   <SignIn />
    //   <StatusBar style="auto" />
    // </View>
  );
<<<<<<< HEAD
}
=======
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#7642AC",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
>>>>>>> 98cb62cc92c590dc61e9f2856d9b1064b0002d67
