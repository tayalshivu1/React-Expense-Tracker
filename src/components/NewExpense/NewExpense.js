import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onNewExpanseAdded }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onNewExpanseAdded(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
