import React from "react";

import styles from "./styles.module.css";

const TodoItem: React.FC<{
    key: string;
    text: string;
    onRemove: () => void;
}> = (props) => {
    return (
        <li onClick={props.onRemove} className={styles.item}>
            {props.text}
        </li>
    );
};

export default TodoItem;
