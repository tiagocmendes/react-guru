import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import styles from "./styles.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = "";
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
