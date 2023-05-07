import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <View style={style.center}>
      <Image style={style.splash} source={require("../assets/amico.png")} />
      <Text style={style.title}>C-Sports</Text>
    </View>
  );
};

const style = StyleSheet.create({
  splash: {
    width: "48%",
    height: "48%",
    aspectRatio: "268/250.85",
  },
  title: {
    // fontFamily: "Open Sans",
    marginTop: "10%",
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Splash;
