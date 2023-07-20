import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    eneteredDate: "",
  });

  const inputChangeHandler = (identifier, val) => {
    if (identifier === "title") {
      setUserInput((prevState) => ({ ...prevState, enteredTitle: val }));
    } else if (identifier === "amount") {
      setUserInput((prevState) => ({ ...prevState, enteredAmount: val }));
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        enteredDate: val,
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      title: userInput.enteredTitle,
      price: +userInput.enteredAmount,
      expenseDate: userInput.enteredDate,
    };

    onSaveExpenseData(inputData);

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-07-20"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
