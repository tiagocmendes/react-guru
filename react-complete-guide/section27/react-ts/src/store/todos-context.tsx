import React, { useState } from "react";
import Todo from "../models/todos";

type TodosContextType = {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
    items: [],
    addTodo: (todoText: string) => {},
    removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = (
    props
) => {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Learn React"),
        new Todo("Learn TypeScript"),
    ]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((previousState) => {
            return previousState.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((previousState) => {
            return previousState.filter((todo) => todo.id !== todoId);
        });
    };

    const contextValue: TodosContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};
