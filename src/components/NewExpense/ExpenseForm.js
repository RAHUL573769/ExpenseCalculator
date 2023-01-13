import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  console.log(props.onSaveExpense);
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleDate = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    // console.log(expenseData);
  };

  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input onChange={handleTitle} type="text" name="" id="" />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              onChange={handleAmount}
              type="number"
              min="0.01"
              step="0.01"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              onClick={handleDate}
              type="number"
              min="2019-01-01"
              max="2022-12-31"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
