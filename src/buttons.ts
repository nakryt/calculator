import { CSSProperties } from "react";
import { TStyles, styles } from "../App";
import { TActionType } from "./calculator";

const DIVIDE = String.fromCharCode(247);
const MINUS = String.fromCharCode(8211);
const PLUS_MINUS = `+/${MINUS}`;
const MULTIPLY = String.fromCharCode(215);

type TButton = {
  text: string;
  style: Partial<TStyles>;
  type: TActionType;
};

// const btn:TButton = { text: "AC", style: styles.gray, type: TActionType.clearAll }

export const buttons = [
  [
    { text: "AC", style: ["gray"], type: TActionType.clearAll },
    { text: PLUS_MINUS, style: ["gray"], type: TActionType.plusMinus },
    { text: "%", style: ["gray"], type: TActionType.percent },
    { text: DIVIDE, style: ["orange"], type: TActionType.divide },
  ],
  [
    { text: "mc", style: ["normal"], type: TActionType.memoryClear },
    { text: "mr", style: ["normal"], type: TActionType.memory },
    { text: "m-", style: ["normal"], type: TActionType.memoryMinus },
    { text: "m+", style: ["orange"], type: TActionType.memoryPlus },
  ],
  [
    { text: "7", style: ["normal"], type: TActionType.number, value: "7" },
    { text: "8", style: ["normal"], type: TActionType.number, value: "8" },
    { text: "9", style: ["normal"], type: TActionType.number, value: "9" },
    { text: MULTIPLY, style: ["orange"], type: TActionType.multiply },
  ],
  [
    { text: "4", style: ["normal"], type: TActionType.number, value: "4" },
    { text: "5", style: ["normal"], type: TActionType.number, value: "5" },
    { text: "6", style: ["normal"], type: TActionType.number, value: "6" },
    { text: MINUS, style: ["orange"], type: TActionType.minus },
  ],
  [
    { text: "1", style: ["normal"], type: TActionType.number, value: "1" },
    { text: "2", style: ["normal"], type: TActionType.number, value: "2" },
    { text: "3", style: ["normal"], type: TActionType.number, value: "3" },
    { text: "+", style: ["orange"], type: TActionType.plus },
  ],
  [
    {
      text: "0",
      style: ["normal", "zero"],
      type: TActionType.number,
      value: "0",
    },
    { text: ",", style: ["normal"], type: TActionType.dot },
    { text: "=", style: ["orange"], type: TActionType.equal },
  ],
];
