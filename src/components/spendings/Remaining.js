import React, { useContext } from "react";
import '../../assets/css/remaining.scss';
import { AppContext } from "../../context/AppContext";

const Remaining = () => {
    const {expenses, allowance} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);//starting value 0

    const alertType =  allowance - totalExpenses < 1000 ? "remaining__low" : "remaining__high";

    return(
        <div className="remaining">
            <div className="remaining__wrapper">
                <div className={`remaining__title ${alertType}`}>
                    Remaining: {allowance - totalExpenses}
                </div>
            </div>
        </div>
    );
}

export default Remaining;