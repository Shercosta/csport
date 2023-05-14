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
import config from "../config";
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    const url = config.baseUrl + '/api/users'
    const body = {name, username, password, age, height, weight}
    axios.post(url, body).then(() => {
      alert("Sign Up berhasil, Silahkan Sign In");
      navigation.navigate("SignIn");
    }).catch(() => {
      alert("Sign Up Error, Silahkan Isi Form");
    })
  };
  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Sign Up</Text>
      <Image style={styles.img} source={require("../assets/icosignup.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nama"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Age"
          placeholderTextColor="#fafafa"
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
          value={age}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Height (Cm)"
          keyboardType="numeric"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setHeight(text)}
          value={height}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Weight (Kg)"
          keyboardType="numeric"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setWeight(text)}
          value={weight}
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
    width: "10%",
    height: "10%",
    aspectRatio: "268/250.85",
    paddingBottom: 10
  },
  container: {
    backgroundColor: "#7643ac",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    flex: 1,
    paddingTop: 30,
  },
  logoText: {
    // fontFamily: "Open Sans",
    marginBottom: "10%",
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  title: {
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputView: {
    width: 250,
    backgroundColor: "#7643ac",
    height: 50,
    marginBottom: 5,
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
    width: 120,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    // marginBottom: 10,
  },
  signupText: {
    color: "#7643ac",
    fontWeight: "bold",
    fontSize: 18,
  },
  signinBtn: {
    width: 150,
    backgroundColor: "#7643ac",
    borderColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    marginBottom: 10,
  },
  signinText: {
    fontSize: 18,
    color: "#fafafa",
    fontWeight: "bold",
  },
});
