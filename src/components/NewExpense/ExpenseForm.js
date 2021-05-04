import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [newTitle, setEnteredTitle] = useState('')
    const [newAmount, setEnteredAmount] = useState('')
    const [newDate, setEnteredDate] = useState('')


    const titlechangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountchangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const datechangeHandler = (e) => {
        setEnteredDate(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    
  


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titlechangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={amountchangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={newDate} onChange={datechangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    )
}


export default ExpenseForm;