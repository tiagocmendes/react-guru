export enum ButtonType {
    DIGIT = "digit",
    RESET = "reset",
    DECIMAL = "decimal",
    OPERATE = "operate",
    OPERATOR = "operator",
    SYMMETRIC = "symmetric",
    PERCENTAGE = "percentage",
}

export type Reset = "AC";
export type Operate = "=";
export type Percentage = "%";
export type Symmetric = "+/-";
export type Operator = "+" | "-" | "x" | "÷" | "";
export type Digit =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | ".";

export type Button = {
    value: Reset | Operate | Percentage | Symmetric | Operator | Digit;
    type: ButtonType;
};
