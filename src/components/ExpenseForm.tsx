function ExpenseForm() {
  return (
    <form className='expense-form'>
      <input type='text' placeholder='Expense Title' />
      <input type='number' min={0} placeholder='Amount' />
      <input type='date' />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
