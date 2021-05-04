import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';          //React hooks begun with word "use" they must be called into the component functions




const ExpenseItem = (props) => {


    const [title, setTitle] = useState(props.title);

    const clickedHandler = () => {

        setTitle('Updated!!!!');
    }


    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickedHandler}>Change Title</button>
            </Card>
        </li>
    );


}

export default ExpenseItem;