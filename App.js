import { StatusBar } from "expo-status-bar";
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
import Record from "./components/Record";
import Powerlifting from "./components/Powerlifting";
import { Provider } from "react-redux";
import store from "./src/redux-thunk/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <StatusBar style="auto" />
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
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Record"
          component={Record}
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Powerlifting"
          component={Powerlifting}
          options={{ headerShown: false }}
          />
        <Stack.Screen
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
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    // <Text>Open up App.js to start working on your app!</Text>
    //  <Splash />
    //   <SignIn />
    //   <StatusBar style="auto" />
    // </View>
  );
}

