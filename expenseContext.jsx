import React, { createContext, useState, useContext } from 'react';

// Expense context'i
const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (expenseToDelete) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.created !== expenseToDelete.created));
  };

  const getCategoryTotal = (category) => {
    return expenses.filter(exp => exp.category === category).reduce((total, exp) => total + parseFloat(exp.amount), 0);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, getCategoryTotal, categories, addCategory }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => useContext(ExpenseContext);