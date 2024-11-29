import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  totalExpenses: 0,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const expenseValue = Number(action.payload);
      state.expenses.push({ expense: expenseValue });
      state.totalExpenses += expenseValue;  // Add to total expenses
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
  