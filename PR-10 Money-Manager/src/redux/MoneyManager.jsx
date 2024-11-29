import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../feature/IncomeSlice';  // Import only addIncome
import { addExpense } from '../feature/ExpenseSlice';  // Import addExpense

export default function MoneyManager() {    
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");

    const { incomes, total } = useSelector((state) => state.incomeKey);  // Access income state
    const { expenses, totalExpenses } = useSelector((state) => state.expenseKey);  // Access expense state

    const dispatch = useDispatch();

    // Handle adding income
    const handleIncome = () => {
        if (income) {
            dispatch(addIncome(income));  // Dispatch addIncome action
            setIncome("");  // Clear input after adding
        }
    };

    // Handle adding expense
    const handleExpense = () => {
        if (expense) {
            dispatch(addExpense(expense));  // Add the expense
            // No need to call decreaseIncome because extraReducers will handle it
            setExpense("");  // Clear input after adding
        }
    };

    return (
        <div>
            <h1>Money Manager</h1>

            {/* Income Input */}
            <input
                type="number"
                placeholder="Enter income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
            />
            <button onClick={handleIncome}>Add Income</button>

            <h2>Total Income: ${total}</h2>

            {/* Expenses Input */}
            <input
                type="number"
                placeholder="Enter expense"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
            />
            <button onClick={handleExpense}>Add Expense</button>

            <h2>Total Expenses: ${totalExpenses}</h2>

            {/* Display Incomes */}
            <h3>Incomes:</h3>
            {incomes && incomes.length > 0 ? (
                incomes.map((e, i) => (
                    <ul key={i}>
                        <li>Income {i + 1}: ${e.income}</li>
                    </ul>
                ))
            ) : (
                <p>No income added yet.</p>
            )}

            {/* Display Expenses */}
            <h3>Expenses:</h3>
            {expenses && expenses.length > 0 ? (
                expenses.map((e, i) => (
                    <ul key={i}>
                        <li>Expense {i + 1}: ${e.expense}</li>
                    </ul>
                ))
            ) : (
                <p>No expense added yet.</p>
            )}
        </div>
    );
}
