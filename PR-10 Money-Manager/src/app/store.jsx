import { configureStore } from '@reduxjs/toolkit';
import incomeReducer from '../feature/IncomeSlice';  
import expenseReducer from '../feature/ExpenseSlice';  

export const store = configureStore({
  reducer: {
    incomeKey: incomeReducer,
    expenseKey: expenseReducer,
  },
});

