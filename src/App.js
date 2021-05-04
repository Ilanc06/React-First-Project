
import Expenses from './components/Expenses/Expenses';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { title: 'Car Insurance', amount: '294.67', date: new Date(2021, 2, 28), id: 'e1' },
  { title: 'Inokim OXO', amount: '2007.89', date: new Date(2021, 2, 30), id: 'e2' },
  { title: 'Food', amount: '500.67', date: new Date(2021, 3, 8), id: 'e3' },
  { title: 'Clothes', amount: '294.67', date: new Date(2021, 3, 2), id: 'e4' }
];



const App = () => {

  const [updatedExpenses, setUpdatedExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setUpdatedExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
      };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={updatedExpenses} />
    </div>
  );
}

export default App;
