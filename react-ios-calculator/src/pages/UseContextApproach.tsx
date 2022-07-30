import { useContext } from "react";

import { Display } from "../components/Display";
import { CalculatorButton } from "../components/CalculatorButton";

import { buttons } from "../constants/buttons";
import { Button } from "../models/button";
import { DisplayContext } from "../store/display-context";

const UseContextApproach = () => {
    const displayCtx = useContext(DisplayContext);

    const handleButtonClick = (button: Button) => {
        displayCtx.handleButtonClick(button);
    };

    return (
        <div>
            <Display value={displayCtx.display} />
            {buttons.map((button: Button) => (
                <CalculatorButton
                    button={button}
                    onClickHandler={handleButtonClick}
                />
            ))}
        </div>
    );
};

export default UseContextApproach;
