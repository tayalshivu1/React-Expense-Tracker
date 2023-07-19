import "./expenseItem.css";
import Date from "./Date";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <Date date={props.expense.expenseDate} />
      </div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
