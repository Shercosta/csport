import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState , useEffect} from "react";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import config from "../config";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const running = () => {
    navigation.navigate("Running");
  };
  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const signOut = () => {
    const url = config.baseUrl + '/api/auth/logout'
    axios.delete(url).then(({}) => {
      navigation.navigate("SignIn");
    }).catch(() => {})
  };
  const [profile, setProfile] = useState({
    name: '-',
    age: 0,
    height: 0,
    weight: 0,
  });

  // Get data.
  const url = config.baseUrl + '/api/me'
  useEffect(() => {
    axios.get(url).then(({data}) => {
      setProfile(data.data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Personal Record</Text>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>{ profile.name }</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>{ profile.age }</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>{ profile.height} cm</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>{ profile.weight } kg</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Edit Profile");
            }}
          >
            <Text style={styles.btntext}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => signOut()}
            >
            <Text style={styles.btntext}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="Trophy" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="barbell-sharp" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="running"
            size={40}
            color="white"
            onPress={running}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#490959",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  textHeader: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 65,
    left: 40,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 110,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    width: "90%",
    padding: 10,
    borderRadius: 10,
  },
  infoLabel: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
  infoValue: {
    fontSize: 25,
    color: "#000000",
  },
  btn: {
    backgroundColor: "#7642AC",
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
  },
  btn1: {
    backgroundColor: "#535353",
    width: "40%",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
