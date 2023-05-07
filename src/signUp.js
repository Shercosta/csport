import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (username !== "" && password !== "") {
      alert("Sign Up berhasil, Silahkan Sign In");
      navigation.navigate("SignIn");
    } else {
      alert("Sign Up Error, Silahkan Isi Form");
    }
  };
  const handleSignIn = () => {
    // if (email === "user@example.com" && password === "password") {
    //   alert("Login berhasil");
    // } else {
    //   alert("Login gagal");
    // }
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Sign Up</Text>
      <Image style={styles.img} source={require("../assets/amico.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
        <Text style={styles.signupText}>Create</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Or </Text>
      <TouchableOpacity style={styles.signinBtn} onPress={handleSignIn}>
        <Text style={styles.signinText}>Back To Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "25%",
    height: "25%",
    aspectRatio: "268/250.85",
  },
  container: {
    backgroundColor: "#7643ac",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    flex: 1,
  },
  logoText: {
    // fontFamily: "Open Sans",
    marginTop: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  title: {
    marginTop: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputView: {
    width: 250,
    backgroundColor: "#7643ac",
    height: 50,
    marginBottom: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#fafafa",
  },
  inputText: {
    fontSize: 15,
    left: -20,
    height: 20,
    color: "#fafafa",
  },
  signupBtn: {
    width: 150,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: "#7643ac",
    fontWeight: "bold",
    fontSize: 18,
  },
  signinBtn: {
    width: 200,
    backgroundColor: "#7643ac",
    borderColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  signinText: {
    fontSize: 18,
    color: "#fafafa",
    fontWeight: "bold",
  },
});
