export const operate = (
    firstNumber: number,
    secondNumber: number,
    operator: string
): number => {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "x":
            return firstNumber * secondNumber;
        case "÷":
            return secondNumber ? firstNumber / secondNumber : NaN;
        default:
            return NaN;
    }
};
