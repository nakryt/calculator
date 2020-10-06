import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const nums = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, ".", "="],
    ];
    const operations = ["%", "+", "-", "*", "/"];

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>12*12</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {nums.map((row, index) => {
              return (
                <View key={index} style={styles.row}>
                  {row.map((num) => {
                    return (
                      <TouchableOpacity key={num} style={styles.button}>
                        <Text style={styles.buttonText}>{num}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <View style={styles.operations}>
            {operations.map((op) => (
              <TouchableOpacity key={op} style={styles.button}>
                <Text style={styles.buttonText}>{op}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#fff",
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    backgroundColor: "red",
  },
  resultText: {
    fontSize: 30,
    color: "#fff",
  },
  calculation: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    backgroundColor: "green",
  },
  calculationText: {
    fontSize: 24,
    color: "#fff",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
    backgroundColor: "pink",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  operations: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "orange",
  },
});
