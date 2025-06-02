function ExpenseList(props) {
  // console.log(props);
  return (
    <ul className='expense-list'>
      {props.expenses.map((expense) => {
        <li key={expense.id} className='expense-item'>
          <div>
            <h3>{expense.title}</h3>
            <p>
              ${expense.amount.toFixed(2)} - {expense.date}
            </p>
          </div>
          <button>🗑️</button>
        </li>;
      })}
    </ul>
  );
}

export default ExpenseList;
