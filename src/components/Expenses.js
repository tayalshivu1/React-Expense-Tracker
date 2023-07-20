import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const filterChangeHandler = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return (
      selectedFilter === new Date(expense.expenseDate).getFullYear().toString()
    );
  });

  const expensesShowsData =
    filteredExpenses.length === 0 ? (
      <p className="no-expense-check">No Expenses!</p>
    ) : (
      <Card>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    );

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={selectedFilter}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesShowsData}
    </div>
  );
}
