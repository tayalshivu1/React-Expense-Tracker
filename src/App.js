import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    expenseDate: new Date(2023, 10, 23),
    title: "Car Insurance",
    price: "5000",
  },
  {
    id: 2,
    expenseDate: new Date(2022, 1, 12),
    title: "Bike Insurance",
    price: "2000",
  },
  {
    id: 3,
    expenseDate: new Date(2022, 4, 27),
    title: "Health Insurance",
    price: "10000",
  },
  {
    id: 4,
    expenseDate: new Date(2023, 3, 30),
    title: "Restaurant visit",
    price: "3000",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [
        {
          ...expense,
          price: expense.price,
          expenseDate: new Date(expense.expenseDate),
        },
        ...prevExpenses,
      ];
    });
  };

  return (
    <div>
      <NewExpense onNewExpanseAdded={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
