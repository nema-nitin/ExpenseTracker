import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);
  const formSaveHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const showFormHandler = () => {
    setEditing(true);
  };

  const hideFormHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={showFormHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveData={formSaveHandler}
          stopEditing={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
