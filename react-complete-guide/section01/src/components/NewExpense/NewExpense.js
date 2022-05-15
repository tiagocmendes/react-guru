import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [hideExpenseForm, setHideExpenseForm] = useState(true);

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        toggleExpenseForm();
    };

    const toggleExpenseForm = () => {
        setHideExpenseForm((prevState) => {
            return !prevState;
        });
    };

    if (hideExpenseForm) {
        return (
            <div className="new-expense">
                <button onClick={toggleExpenseForm}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={toggleExpenseForm}
            />
        </div>
    );
};

export default NewExpense;
