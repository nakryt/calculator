const add = (number1: number, number2: number) => number1 + number2;

const div = (num1: number, num2: number) => {
  if (num2 === 0) {
    throw Error("Divided by zero...");
  }
  return num1 / num2;
};

try {
  div(3, 0);
} catch (e) {
  console.log(e.stack);
}

type TOperands = "+" | "-" | "*" | "/" | "=";

class Calc {
  private previous = 0;
  private current = 0;
  private operand = "";

  addNumber(num: string | number) {
    this.current = Number(String(this.current) + String(num));
  }

  setOperand(operand: TOperands) {
    switch (operand) {
      case "+":
        this.operand = operand;
        this.previous = this.current;
        this.current = 0;
        break;
      case "=":
        this.current = this.previous;
    }
  }

  add() {
    this.current = this.current + this.previous;
    return this.current;
  }

  sub() {
    this.current = this.current - this.previous;
    return this.current;
  }
}

const calc = new Calc();
calc.addNumber("4");

console.log();
