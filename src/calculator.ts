export enum TActionType {
  clearAll = "clear-all",
  plusMinus = "plus-minus",
  percent = "percent",
  memory = "memory",
  memoryClear = "memory-clear",
  memoryPlus = "memory-plus",
  memoryMinus = "memory-minus",
  number = "number",
  dot = "dot",
  equal = "equal",
  plus = "plus",
  minus = "minus",
  multiply = "multiply",
  divide = "divide",
}
type TAction = {
  type: TActionType;
  value?: string;
};
type TOperations = "+" | "-" | "*" | "/" | "%" | undefined;

export default class Calculator {
  previousOperand: string;
  currentOperand: string;
  operation: TOperations;
  percent: boolean;
  memory: number;
  result: number;
  isNewValue: boolean;

  constructor() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
    this.percent = false;
    this.memory = 0;
    this.result = 0;
    this.isNewValue = false;

    this.appendNumber = this.appendNumber.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.compute = this.compute.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  format(number: string) {
    if (number.length < 11) return number;
    const digits = number.split(".");
    const integerDigits = digits[0];
    const decimalDigits = digits[1];
    if (integerDigits.length > 10) return "9999999999";
    if (decimalDigits != null) {
      return `${integerDigits}.${decimalDigits.slice(
        0,
        9 - integerDigits.length
      )}`;
    }
    return integerDigits;
  }

  appendNumber(number: string) {
    if (this.currentOperand.length >= 10 && !this.isNewValue) return;
    if (number === ".") {
      if (this.currentOperand.includes(".")) return;
      if (this.currentOperand === "" || this.isNewValue) {
        this.currentOperand = "0";
      }
      this.currentOperand += number;
    } else {
      this.currentOperand = this.isNewValue
        ? number
        : this.currentOperand + number;
    }
    this.isNewValue = false;
  }

  setOperation(operation: TOperations) {
    if (this.currentOperand === "") this.currentOperand = "0";
    if (this.currentOperand !== "") this.compute();
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.operation = operation;
  }

  compute() {
    const numberOrZero = (num: string) => {
      const number = parseFloat(num);
      if (!isNaN(number)) return number;
      return 0;
    };
    const previousOperand = numberOrZero(this.previousOperand);
    const currentOperand = numberOrZero(this.currentOperand);
    switch (this.operation) {
      case "+":
        this.result = this.percent
          ? previousOperand + currentOperand * previousOperand * 0.01
          : previousOperand + currentOperand;
        break;
      case "-":
        this.result = this.percent
          ? previousOperand - currentOperand * previousOperand * 0.01
          : previousOperand - currentOperand;
        break;
      case "*":
        this.result = this.percent
          ? currentOperand * previousOperand * 0.01
          : previousOperand * currentOperand;
        break;
      case "/":
        if (currentOperand === 0) {
          this.currentOperand = "Divided by zero!";
          return;
        }
        this.result = this.percent
          ? (previousOperand * 100) / currentOperand
          : previousOperand / currentOperand;
        break;
      default:
        return;
    }
    this.currentOperand = this.format(String(this.result));
    this.operation = undefined;
    this.isNewValue = true;
  }

  dispatch(action: TAction) {
    switch (action.type) {
      case TActionType.clearAll:
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
        this.memory = 0;
        break;
      case TActionType.plusMinus:
        this.currentOperand = String(-Number(this.currentOperand));
        break;
      case TActionType.memoryClear:
        this.memory = 0;
        break;
      case TActionType.memoryPlus:
        this.memory += Number(this.currentOperand);
        this.isNewValue = true;
        break;
      case TActionType.memoryMinus:
        this.memory -= Number(this.currentOperand);
        this.isNewValue = true;
        break;
      case TActionType.plus:
        this.setOperation("+");
        break;
      case TActionType.minus:
        this.setOperation("-");
        break;
      case TActionType.multiply:
        this.setOperation("*");
        break;
      case TActionType.divide:
        this.setOperation("/");
        break;
      case TActionType.percent:
        this.percent = true;
        this.appendNumber("%");
        break;
      case TActionType.number:
        action.value && this.appendNumber(action.value);
        break;
      case TActionType.dot:
        this.appendNumber(".");
        break;
      case TActionType.equal:
        this.compute();
        break;
      default:
        return;
    }
  }
}

// const calc = new Calculator();
// export const dispatch = calc.dispatch;
