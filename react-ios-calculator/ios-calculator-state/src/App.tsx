import { useState } from "react";

import { Display } from "./components/Display";
import { CalculatorButton } from "./components/CalculatorButton";

import { Button, ButtonType } from "./models/button";
import { buttons } from "./constants/buttons";

import { operate } from "./utils/operate";

function App() {
    const [displayValue, setDisplayValue] = useState<string>("");
    const [previousOperand, setPreviousOperand] = useState<string>("");
    const [currentOperator, setCurrentOperator] = useState<string>("");
    const [operationCompleted, setOperationCompleted] = useState(false);

    const handleButtonClick = (button: Button): void => {
        switch (button.type) {
            case ButtonType.DIGIT:
                if (currentOperator && !previousOperand) {
                    setPreviousOperand(displayValue);
                    setDisplayValue("");
                }

                if (operationCompleted) {
                    setOperationCompleted(false);
                    setDisplayValue("");
                }

                setDisplayValue((prevState) => prevState + button.value);
                break;
            case ButtonType.DECIMAL:
                setDisplayValue((prevState) =>
                    !prevState.includes(".") ? prevState + "." : prevState
                );
                break;
            case ButtonType.RESET:
                setDisplayValue("");
                setPreviousOperand("");
                setCurrentOperator("");
                break;
            case ButtonType.SYMMETRIC:
                setDisplayValue((prevState) =>
                    prevState ? `${-Number(prevState)}` : ""
                );
                break;
            case ButtonType.PERCENTAGE:
                setDisplayValue((prevState) => {
                    return `${Number(prevState) * 0.01}`;
                });
                break;
            case ButtonType.OPERATOR:
                setCurrentOperator(button.value);
                break;
            case ButtonType.OPERATE:
                const result = operate(
                    Number(previousOperand),
                    Number(displayValue),
                    currentOperator
                );
                setDisplayValue(`${result}`);
                setOperationCompleted(true);
                setCurrentOperator("");
                setPreviousOperand("");
                break;
            default:
                throw new Error("Button type not supported.");
        }
    };

    return (
        <div>
            <Display value={displayValue} />
            {buttons.map((button: Button) => (
                <CalculatorButton
                    button={button}
                    onClickHandler={handleButtonClick}
                />
            ))}
        </div>
    );
}

export default App;
