import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      expenseDate: new Date(2023, 10, 23),
      title: "Car Insurance",
      price: "Rs 5000",
    },
    {
      id: 2,
      expenseDate: new Date(2022, 1, 12),
      title: "Bike Insurance",
      price: "Rs 2000",
    },
    {
      id: 3,
      expenseDate: new Date(2022, 4, 27),
      title: "Health Insurance",
      price: "Rs 10000",
    },
    {
      id: 4,
      expenseDate: new Date(2023, 3, 30),
      title: "Restaurant visit",
      price: "Rs 3000",
    },
  ];

  return (
    <div>
      <h1>Expense Tracker App</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
