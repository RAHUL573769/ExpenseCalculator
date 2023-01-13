import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  console.log(props);
  const saveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
    };
    props.onAddExpense(expenseData);
    // console.log(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
