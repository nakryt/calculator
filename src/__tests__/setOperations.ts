import Calculator from "../calculator";

describe("Set operations:", () => {
  let calc: Calculator;
  beforeEach(() => {
    calc = new Calculator();
  });
  it("Should set operation plus & change currentNumber to previousNumber", () => {
    calc.appendNumber("2");
    calc.setOperation("+");
    expect(calc.previousOperand).toBe("2");
    expect(calc.operation).toBe("+");
  });
  it("Should set operation minus & change currentNumber to previousNumber", () => {
    calc.appendNumber("3");
    calc.setOperation("-");
    expect(calc.previousOperand).toBe("3");
    expect(calc.operation).toBe("-");
  });
  it("Should set operation multiply & change currentNumber to previousNumber", () => {
    calc.appendNumber("4");
    calc.setOperation("*");
    expect(calc.previousOperand).toBe("4");
    expect(calc.operation).toBe("*");
  });
  it("Should set operation divide & change currentNumber to previousNumber", () => {
    calc.appendNumber("5");
    calc.setOperation("/");
    expect(calc.previousOperand).toBe("5");
    expect(calc.operation).toBe("/");
  });
  it("If there is no current operand it should to be zero after pass operation", () => {
    calc.setOperation("+");
    expect(calc.previousOperand).toBe("0");
  });
});
