import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { buttons } from "./src/buttons";
import Calculator, { TActionType } from "./src/calculator";

type TProps = {};
type TState = {
  current: string;
  calc: Calculator;
};
export default class App extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      current: "",
      calc: new Calculator(),
    };
  }
  pressHandler(type: TActionType, value?: string) {
    if (type === TActionType.memory) {
      this.setState({ current: this.state.calc.memory.toString() });
      this.state.calc.currentOperand = "";
    } else {
      this.state.calc.dispatch({ type, value });
      this.setState({
        current: this.state.calc.currentOperand.toString(),
      });
    }
  }
  render() {
    const { previousOperand, result, operation } = this.state.calc;
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>
            {previousOperand && operation && previousOperand + operation}
          </Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.current}</Text>
        </View>

        <View style={styles.buttons}>
          {buttons.map((row, index) => {
            return (
              <View key={index} style={styles.row}>
                {row.map(({ text, style, type, value }) => {
                  return (
                    <TouchableOpacity
                      key={text}
                      // @ts-ignore
                      style={[styles.button, ...style.map((st) => styles[st])]}
                      onPress={() => this.pressHandler(type, value)}
                    >
                      <Text style={styles.buttonText}>{text}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  calculation: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  calculationText: {
    fontSize: 24,
    color: "#fff",
  },
  result: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
  },
  buttons: {
    flex: 10,
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  normal: {
    backgroundColor: "#464343",
  },
  gray: {
    backgroundColor: "#aaa",
  },
  orange: {
    backgroundColor: "#ff9600",
  },
  zero: {
    width: 160,
    borderRadius: 50,
    alignItems: "flex-start",
    paddingLeft: 24,
  },
  buttonText: {
    fontSize: 32,
    color: "#fff",
  },
});
