import React from "react";

import { displayStyles } from "./styles";

interface DisplayProps {
    value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
    return <div style={displayStyles}>{value || "0"}</div>;
};
