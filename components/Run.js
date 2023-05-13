import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runners: [
        { id: 1, name: 'John', time: 10 },
        { id: 2, name: 'Jane', time: 12 },
        { id: 3, name: 'Bob', time: 15 },
        { id: 4, name: 'Alice', time: 18 },
      ],
    };
  }

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.idText}>{item.id}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  render() {
    const { runners } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Leaderboard</Text>
        <View style={styles.row}>
          <Text style={styles.idText}>ID</Text>
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.timeText}>Time (s)</Text>
        </View>
        <FlatList
          data={runners}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  idText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '10%',
  },
  nameText: {
    fontSize: 20,
    width: '60%',
  },
  timeText: {
    fontSize: 20,
    width: '30%',
  },
  flatList: {
    width: '100%',
  },
});