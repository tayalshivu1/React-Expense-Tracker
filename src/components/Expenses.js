import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";

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

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={selectedFilter}
        onFilterChange={filterChangeHandler}
      />
      <Card>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
}
