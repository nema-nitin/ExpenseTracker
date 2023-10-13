import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">No Expenses Found!!</h3>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem key={exp.id} item={exp} />
      ))}
    </ul>
  );
};

export default ExpensesList;
