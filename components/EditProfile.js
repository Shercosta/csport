import React from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/ddraodqz5/image/upload/v1664331064/DSC_0103_b_pzic4p.webp",
            }}
            style={styles.avatar}
          />
          <Icon
            name="camera"
            size={40}
            color="#fff"
            style={{
              opacity: 0.8,
              alignItems: "center",
              position: "absolute",
              bottom: 2,
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput, {}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Age"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[styles.textInput, {}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Height"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[styles.textInput, {}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} />
          <TextInput
            placeholder="Weight"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[styles.textInput, {}]}
          />
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Text style={styles.btntext}>SAVE EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.btntext}>GO BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 180,
    height: 180,
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
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: "#f2f2f2",
    width: "90%",
    alignItems: "center",
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  btn: {
    backgroundColor: "#7642AC",
    width: "45%",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
    alignItems: "center",
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

export default EditProfile;
