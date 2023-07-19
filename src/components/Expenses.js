import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}
