import React from "react";
import styles from "./styles.module.css";

import { Button, ButtonType } from "../../models/button";

interface CalculatorButtonProps {
    button: Button;
    onClickHandler: (button: Button) => void;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
    button,
    onClickHandler,
}) => {
    const buttonBackground =
        button.type === ButtonType.OPERATOR ||
        button.type === ButtonType.OPERATE
            ? styles.orangeBackground
            : styles.grayBackground;

    const buttonWidth = button.value === "0" ? "50%" : "25%";

    const onClickButtonHandler = () => {
        onClickHandler(button);
    };

    return (
        <button
            onClick={onClickButtonHandler}
            style={{ width: buttonWidth }}
            className={`${styles.buttonStyle} ${buttonBackground}`}
        >
            {button.value}
        </button>
    );
};
