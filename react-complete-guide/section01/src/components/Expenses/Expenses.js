import React, { useState } from "react";

import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(
        String(new Date().getFullYear())
    );

    const yearChangeHandler = (newYearFilter) => {
        setFilteredYear(newYearFilter);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onYearChange={yearChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
