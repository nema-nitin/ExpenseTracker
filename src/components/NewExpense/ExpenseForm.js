import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   Alternative way to use useState
  //   (one single state for a form intead of individual state for input fields)
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleHandler = (event) => {
    setTitle(event.target.value);

    // Alternative way to setState
    // setUserInput((prevState) => {
    //   // ...prevState returning prev state and just changing(overriding) the impacted one
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  // Shared handler function
  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setTitle(value);
  //     } else if (identifier === "amount") {
  //       setTitle(amount);
  //     } else {
  //       setDate(date);
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
          {/* 
          Alternative Handler Calling Approach
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateHandler}
            min="2023-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
