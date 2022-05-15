import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const blackUserInput = {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    };

    const [userInput, setUserInput] = useState(blackUserInput);

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, enteredDate: event.target.value };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setUserInput(blackUserInput);
    };

    const cancelHandler = () => {
        props.toggleExpenseForm();
        setUserInput(blackUserInput);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2020-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelHandler}>Cancel</button>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
