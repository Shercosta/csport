import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Record from "./Record";
import Running from "./Running";
import config from "../config";

const Leaderboard = () => {
  const navigation = useNavigation();

  const handleRunning = () => {
    navigation.navigate("Running");
  };
  const Workout = () => {
    navigation.navigate("Workout");
  };
  const Profile = () => {
    navigation.navigate("ProfileScreen");
  };
  const Record = () => {
    navigation.navigate("Record");
  };

  const [users, setUsers] = useState([]) // [name, disatance]

  // Get users.
  const url = config.baseUrl + '/api/users'
  axios.get(url).then(({data}) => {
    setUsers(data.data)
  }).catch(() => {})

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleRunning}>
          <FontAwesome5
            name="shoe-prints"
            size={40}
            color={"#808080"}
            style={styles.icon}
          />
          <Text style={styles.HeaderText}>Running</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons
            name="leaderboard"
            size={40}
            color={"white"}
            style={styles.icon}
          />
          <Text style={styles.HeaderText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {users.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.userNumber}>{index + 1}</Text>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userDistance}>{user.distance}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign 
          name="Trophy" 
          size={40} 
          color="#818181" 
          onPress={Record}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons 
          name="barbell-sharp" 
          size={40} 
          color="#818181" 
          onPress={Workout}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="running" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons 
          name="account-circle" 
          size={40} 
          color="#818181" 
          onPress={Profile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: "#7642ac",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },

  icon: {
    marginHorizontal: 40,
    paddingTop: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
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
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  HeaderText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: -10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  userNumber: {
    width: 30,
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#7642ac",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  userName: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  userDistance: {
    textAlign: "right",
    color: "#808080",
    fontSize: 16,
  },
});

export default Leaderboard;
