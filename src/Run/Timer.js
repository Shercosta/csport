import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      isRunning: false,
    };

    this.intervalId = null;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startTimer = () => {
    this.setState({
      isRunning: true,
    });

    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.intervalId);

    this.setState({
      isRunning: false,
    });
  }

  resetTimer = () => {
    this.setState({
      time: 0,
      isRunning: false,
    });

    clearInterval(this.intervalId);
  }

  render() {
    const { time, isRunning } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.timeText}>{time}</Text>
        <View style={styles.buttonContainer}>
          {!isRunning && (
            <Button title="Start" onPress={this.startTimer} />
          )}
          {isRunning && (
            <Button title="Stop" onPress={this.stopTimer} />
          )}
          <Button title="Reset" onPress={this.resetTimer} />
        </View>
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
  timeText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});