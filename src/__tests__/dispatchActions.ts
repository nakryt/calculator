import Calculator, { TActionType } from "../calculator";

describe("Dispatch actions:", () => {
  let calc: Calculator;
  beforeEach(() => {
    calc = new Calculator();
  });
  it("Should append number", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    expect(calc.currentOperand).toEqual("1");
  });
  it("Should append dot", () => {
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.dot });
    calc.dispatch({ type: TActionType.number, value: "3" });
    expect(calc.currentOperand).toEqual("2.3");
  });
  it("Should append only one dot", () => {
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.dot });
    calc.dispatch({ type: TActionType.number, value: "3" });
    calc.dispatch({ type: TActionType.dot });
    calc.dispatch({ type: TActionType.number, value: "4" });
    expect(calc.currentOperand).toEqual("2.34");
  });

  describe("Operations:", () => {
    it("Should set operation to plus", () => {
      calc.dispatch({ type: TActionType.plus });
      expect(calc.operation).toEqual("+");
    });
    it("Should set operation to minus", () => {
      calc.dispatch({ type: TActionType.minus });
      expect(calc.operation).toEqual("-");
    });
    it("Should set operation to multiply", () => {
      calc.dispatch({ type: TActionType.multiply });
      expect(calc.operation).toEqual("*");
    });
    it("Should set operation to divide", () => {
      calc.dispatch({ type: TActionType.divide });
      expect(calc.operation).toEqual("/");
    });
    it("Should change percent to TRUE", () => {
      calc.dispatch({ type: TActionType.percent });
      expect(calc.percent).toBeTruthy();
    });
    it("Should change currentOperand to oposite '-currentOperand'", () => {
      calc.dispatch({ type: TActionType.number, value: "1" });
      calc.dispatch({ type: TActionType.plusMinus });
      expect(calc.currentOperand).toEqual("-1");
      calc.dispatch({ type: TActionType.plusMinus });
      expect(calc.currentOperand).toEqual("1");
    });
    describe("Memory:", () => {
      it("Should add currentOperand to the memory", () => {
        calc.dispatch({ type: TActionType.number, value: "3" });
        calc.dispatch({ type: TActionType.memoryPlus });
        expect(calc.memory).toEqual(3);
      });
      it("Should clear the memory", () => {
        calc.dispatch({ type: TActionType.number, value: "3" });
        calc.dispatch({ type: TActionType.memoryPlus });
        calc.dispatch({ type: TActionType.memoryClear });
        expect(calc.memory).toEqual(0);
      });
      it("Should reduce memory at currentOperand", () => {
        calc.dispatch({ type: TActionType.number, value: "3" });
        calc.dispatch({ type: TActionType.number, value: "0" });
        calc.dispatch({ type: TActionType.memoryPlus });
        calc.dispatch({ type: TActionType.plus });
        calc.dispatch({ type: TActionType.number, value: "5" });
        calc.dispatch({ type: TActionType.memoryMinus });
        expect(calc.memory).toEqual(25);
      });
    });
  });

  it("Should clear all values", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    calc.dispatch({ type: TActionType.memory });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.clearAll });
    expect(calc.currentOperand).toEqual("");
    expect(calc.previousOperand).toEqual("");
    expect(calc.operation).toBeUndefined();
    expect(calc.memory).toEqual(0);
  });

  it("If equal pressed currentOperand should to be a new value", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.equal });

    calc.dispatch({ type: TActionType.number, value: "5" });
    expect(calc.currentOperand).toEqual("5");
  });

  it("If press period after equal currentOperand should to be a '0.'", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.equal });

    calc.dispatch({ type: TActionType.dot });
    calc.dispatch({ type: TActionType.number, value: "5" });
    expect(calc.currentOperand).toEqual("0.5");
  });
});
