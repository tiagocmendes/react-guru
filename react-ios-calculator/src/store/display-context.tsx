import React, { useState } from "react";
import { Button, ButtonType } from "../models/button";

import { operate } from "../utils/operate";

interface DisplayContextInterface {
    display: string;
    previousDisplay: string;
    operator: string;
    operationCompleted: boolean;
    handleButtonClick: (button: Button) => void;
}

const initialContext: DisplayContextInterface = {
    display: "",
    previousDisplay: "",
    operator: "",
    operationCompleted: false,
    handleButtonClick: (button: Button) => {},
};

export const DisplayContext =
    React.createContext<DisplayContextInterface>(initialContext);

export const DisplayContextProvider: React.FC<{ children: React.ReactNode }> = (
    props
) => {
    const [display, setDisplay] = useState<string>("");
    const [previousDisplay, setPreviousDisplay] = useState<string>("");
    const [operator, setOperator] = useState<string>("");
    const [operationCompleted, setOperationCompleted] = useState(false);

    const handleButtonClick = (button: Button) => {
        switch (button.type) {
            case ButtonType.DIGIT:
                if (operator && !previousDisplay) {
                    setPreviousDisplay(display);
                    setDisplay("");
                }

                if (operationCompleted) {
                    setOperationCompleted(false);
                    setDisplay("");
                }

                setDisplay((prevState) => prevState + button.value);
                break;
            case ButtonType.DECIMAL:
                setDisplay((prevState) =>
                    !prevState.includes(".") ? prevState + "." : prevState
                );
                break;
            case ButtonType.RESET:
                setDisplay("");
                setPreviousDisplay("");
                setOperator("");
                break;
            case ButtonType.SYMMETRIC:
                setDisplay((prevState) =>
                    prevState ? `${-Number(prevState)}` : ""
                );
                break;
            case ButtonType.PERCENTAGE:
                setDisplay((prevState) => {
                    return `${Number(prevState) * 0.01}`;
                });
                break;
            case ButtonType.OPERATOR:
                setOperator(button.value);
                break;
            case ButtonType.OPERATE:
                const result = operate(
                    Number(previousDisplay),
                    Number(display),
                    operator
                );
                setDisplay(`${result}`);
                setOperationCompleted(true);
                setOperator("");
                setPreviousDisplay("");
                break;
            default:
                throw new Error("Button type not supported.");
        }
    };

    return (
        <DisplayContext.Provider
            value={{
                display,
                previousDisplay,
                operator,
                operationCompleted,
                handleButtonClick,
            }}
        >
            {props.children}
        </DisplayContext.Provider>
    );
};
