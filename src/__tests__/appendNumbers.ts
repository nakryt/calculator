import Calculator from "../calculator";

describe("Append numbers:", () => {
  let calc: Calculator;
  beforeEach(() => {
    calc = new Calculator();
  });
  it("Should append numbers to the current number", () => {
    calc.appendNumber("1");
    expect(calc.currentOperand).toBe("1");
    calc.appendNumber("2");
    expect(calc.currentOperand).toBe("12");
  });
  it("If currentOperand is empty & we add period, currentOperand shoul to be equal '0.'", () => {
    calc.appendNumber(".");
    calc.appendNumber("1");
    expect(calc.currentOperand).toBe("0.1");
  });
  it("Should append period, to the current number only ones", () => {
    calc.appendNumber("1");
    calc.appendNumber("2");
    calc.appendNumber(".");
    calc.appendNumber("3");
    expect(calc.currentOperand).toBe("12.3");
    calc.appendNumber(".");
    calc.appendNumber("4");
    expect(calc.currentOperand).toBe("12.34");
  });
});
