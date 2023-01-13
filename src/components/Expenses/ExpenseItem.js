import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.title);

  const handleClick = () => {
    setName("Updated");
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
