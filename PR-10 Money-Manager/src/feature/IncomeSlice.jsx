import { createSlice } from '@reduxjs/toolkit';
import { addExpense } from './ExpenseSlice';  // Import the addExpense action from ExpenseSlice

const initialState = {
  incomes: [],
  total: 0,  // Total income
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const incomeValue = Number(action.payload);
      state.incomes.push({ income: incomeValue });
      state.total += incomeValue;  // Add to total income
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addExpense, (state, action) => {
      const expenseValue = Number(action.payload);
      state.total -= expenseValue;  // Deduct expense from total income
    });
  },
});

export const { addIncome } = incomeSlice.actions;  // Only export addIncome
export default incomeSlice.reducer;
