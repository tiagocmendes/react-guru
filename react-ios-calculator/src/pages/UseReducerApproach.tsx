import { useReducer } from "react";

import { Display } from "../components/Display";
import { CalculatorButton } from "../components/CalculatorButton";

import { buttons } from "../constants/buttons";
import { Button, ButtonType } from "../models/button";

import { operate } from "../utils/operate";

interface DisplayState {
    display: string;
    previousDisplay: string;
    operator: string;
    operationCompleted: boolean;
}

const initialState: DisplayState = {
    display: "",
    previousDisplay: "",
    operator: "",
    operationCompleted: false,
};

const displayIsNaN = (display: string) => isNaN(Number(display));

const displayReducer = (state: DisplayState, action: Button): DisplayState => {
    switch (action.type) {
        case ButtonType.DIGIT:
            let nextState = state;

            if (displayIsNaN(state.display)) {
                nextState.display = "";
            }

            if (state.operator && !state.previousDisplay) {
                nextState.previousDisplay = state.display;
                nextState.display = "";
            }

            if (state.operationCompleted) {
                nextState.operationCompleted = false;
                nextState.display = "";
            }

            return {
                ...nextState,
                display: state.display + action.value,
            };
        case ButtonType.DECIMAL:
            return {
                ...state,
                display: !state.display.includes(".")
                    ? state.display + "."
                    : state.display,
            };
        case ButtonType.RESET:
            return initialState;
        case ButtonType.SYMMETRIC:
            return {
                ...state,
                display: state.display ? `${-Number(state.display)}` : "",
            };
        case ButtonType.PERCENTAGE:
            return {
                ...state,
                display: `${Number(state.display) * 0.01}`,
            };
        case ButtonType.OPERATOR:
            if (displayIsNaN(state.display)) {
                return { ...state, display: "" };
            }

            return {
                ...state,
                operator: action.value,
            };
        case ButtonType.OPERATE:
            const result = operate(
                Number(state.previousDisplay),
                Number(state.display),
                state.operator
            );

            return {
                display: `${result}`,
                previousDisplay: "",
                operator: "",
                operationCompleted: false,
            };
        default:
            throw new Error("Button type not supported.");
    }
};

const UseReducerApproach = () => {
    const [displayState, dispatch] = useReducer(displayReducer, initialState);

    const handleButtonClick = (button: Button) => {
        dispatch(button);
    };

    return (
        <div>
            <Display value={displayState.display} />
            {buttons.map((button: Button) => (
                <CalculatorButton
                    button={button}
                    onClickHandler={handleButtonClick}
                />
            ))}
        </div>
    );
};

export default UseReducerApproach;
