import React, {useContext} from "react";
import '../../assets/css/expenseitem.scss';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from "../../context/AppContext";

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        });
    };

    return (
        <li className="expense__list">
            <span className="expense__name">
                {props.name}
            </span>
            <div>
                <span className="expense__cost">
                    {props.cost}€                
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
}

export default ExpenseItem;