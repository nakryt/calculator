import Calculator, { TActionType } from "../calculator";

describe("Operations:", () => {
  let calc: Calculator;
  beforeEach(() => {
    calc = new Calculator();
  });
  it("Should add numbers", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.result).toEqual(3);
  });

  it("Should reduce first operand on second operand", () => {
    calc.dispatch({ type: TActionType.number, value: "9" });
    calc.dispatch({ type: TActionType.minus });
    calc.dispatch({ type: TActionType.number, value: "3" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.result).toEqual(6);
  });

  it("Should multiply two operands", () => {
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.multiply });
    calc.dispatch({ type: TActionType.number, value: "4" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.result).toEqual(8);
  });

  it("Should divide first operand on second operand", () => {
    calc.dispatch({ type: TActionType.number, value: "9" });
    calc.dispatch({ type: TActionType.divide });
    calc.dispatch({ type: TActionType.number, value: "3" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.result).toEqual(3);
  });

  it("Should return warning if second operand is zero", () => {
    calc.dispatch({ type: TActionType.number, value: "9" });
    calc.dispatch({ type: TActionType.divide });
    calc.dispatch({ type: TActionType.number, value: "0" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.currentOperand).toEqual("Divided by zero!");
    expect(calc.result).toBe(0);
  });
  it("Should add numbers in chain", () => {
    calc.dispatch({ type: TActionType.number, value: "1" });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "2" });
    calc.dispatch({ type: TActionType.plus });
    calc.dispatch({ type: TActionType.number, value: "3" });
    calc.dispatch({ type: TActionType.equal });

    expect(calc.result).toEqual(6);
  });
});
