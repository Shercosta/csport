import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./components/Splash";
// import SignIn from "./src/signIn";
// import SignUp from "./src/signUp";
import ProfileScreen from "./src/Profile/ProfileScreen";
import EditProfile from "./src/Profile/EditProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
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
}