import React, { useContext } from "react";
import '../../assets/css/expenses.scss';
import { AppContext } from "../../context/AppContext";

const Expenses = () => {
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item) => {
        return (total += item.cost);
    },0);//starting value 0

    return(
        <div className='expenses'>
            <div className='expenses__wrapper'>
                <div className="expenses__title">
                    Total Expenses: {totalExpenses}€
                </div>
            </div>
        </div>
    );
}

export default Expenses;