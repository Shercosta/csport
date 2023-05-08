import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/ddraodqz5/image/upload/v1664331064/DSC_0103_b_pzic4p.webp' }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>BilhaqAD</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>21</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>172 cm</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>79 kg</Text>
        </View>
        <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.btn} onPress={
            () => {
              navigation.navigate("Edit Profile");
            }
          }>
            <Text style={styles.btntext}>EDIT PROFILE</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={
            () => {
              navigation.navigate("Login");
            }
          }>
            <Text style={styles.btntext}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
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
  btn: {
    backgroundColor: '#7642AC',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    color: 'white',
    borderRadius: 5,
  },
  btn1: {
    backgroundColor: '#535353',
    width: '40%',
    alignItems: 'center',
    paddingVertical: 10,
    color: 'white',
    borderRadius: 5,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default ProfileScreen;