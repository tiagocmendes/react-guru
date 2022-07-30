import { Button, ButtonType } from "../models/button";

export const buttons: Button[] = [
    {
        value: "AC",
        type: ButtonType.RESET,
    },
    {
        value: "+/-",
        type: ButtonType.SYMMETRIC,
    },
    {
        value: "%",
        type: ButtonType.PERCENTAGE,
    },
    {
        value: "÷",
        type: ButtonType.OPERATOR,
    },
    {
        value: "7",
        type: ButtonType.DIGIT,
    },
    {
        value: "8",
        type: ButtonType.DIGIT,
    },
    {
        value: "9",
        type: ButtonType.DIGIT,
    },
    {
        value: "x",
        type: ButtonType.OPERATOR,
    },
    {
        value: "4",
        type: ButtonType.DIGIT,
    },
    {
        value: "5",
        type: ButtonType.DIGIT,
    },
    {
        value: "6",
        type: ButtonType.DIGIT,
    },
    {
        value: "-",
        type: ButtonType.OPERATOR,
    },
    {
        value: "1",
        type: ButtonType.DIGIT,
    },
    {
        value: "2",
        type: ButtonType.DIGIT,
    },
    {
        value: "3",
        type: ButtonType.DIGIT,
    },
    {
        value: "+",
        type: ButtonType.OPERATOR,
    },
    {
        value: "0",
        type: ButtonType.DIGIT,
    },
    {
        value: ".",
        type: ButtonType.DECIMAL,
    },
    {
        value: "=",
        type: ButtonType.OPERATE,
    },
];
