import React, { useState, useEffect, useReducer } from 'react';
import { View, TextInput, Image, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../config';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const navigation = useNavigation();

  const getBio = () => {
    const url = config.baseUrl + '/api/me'
    axios.get(url).then(({data}) => {
      const profile = data.data;
      setName(profile.name);
      setAge(profile.age.toString());
      setHeight(profile.height.toString());
      setWeight(profile.weight.toString());
    })
  };

  useEffect(() => {
    getBio();
  }, []);

  const saveBio = () => {
    const url = config.baseUrl + '/api/me/bio'
    const body = {name, age, height, weight}
    axios.put(url, body).then(() => {
      Alert.alert('Success', 'Bio updated');
      navigation.navigate("ProfileScreen");
      getBio();
  }).catch(() => {
    alert('Update Bio Failure')
  })
};

  return (
    <View style={styles.container}>
    <Text style={styles.textHeader}>Edit Profile</Text>
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' }}
          style={styles.avatar}
          />
        <Icon name="camera" size={40} color="#fff" style={{
          opacity: 0.8,
          alignItems: 'center',
          position: 'absolute',
          bottom: 2,
        }}/>
      </View>
      </TouchableOpacity>
      <View style={styles.content}>
      <View style={styles.action}>
          <Icon name="account-outline" size={20} />
          <TextInput
            placeholder="Nama"
            value={name}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(text) => setName(text)}
            style={[
              styles.textInput,
              {
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="chart-arc" size={20} />
          <TextInput
            placeholder="Age"
            value={age}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(text) => setAge(text)}
            style={[
              styles.textInput,
              {
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="human-male-height-variant" size={20} />
          <TextInput
            placeholder="Height"
            value={height}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(text) => setHeight(text)}
            style={[
              styles.textInput,
              {
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="weight" size={20}/>
          <TextInput
            placeholder="Weight"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            value={weight}
            autoCorrect={false}
            onChangeText={(text) => setWeight(text)}
            style={[
              styles.textInput,
              {
              },
            ]}
          />
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.btn} onPress={saveBio}>
              <Text style={styles.btntext}>SAVE EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1} onPress={() => {
            navigation.goBack()
          }}>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  textHeader: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 65,
    left: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  content: {
    marginTop: 40,
    alignItems: "center"
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
  action: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#f2f2f2',
    width: '70%',
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  btn: {
    backgroundColor: '#7642AC',
    width: '45%',
    alignItems: 'center',
    paddingVertical: 10,
    color: 'white',
    borderRadius: 5,
    alignItems: 'center',
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

export default EditProfile;