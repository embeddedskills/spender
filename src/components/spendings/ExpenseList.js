import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";

const ExpanseList = () => {
    const { expenses } = useContext(AppContext);
    // const expenses = [
    //     {id: 12345 , name: "Shopping", cost:50},
    //     {id: 12345 , name: "Shopping 2", cost:150},
    //     {id: 12345 , name: "Shopping 3", cost:501},
    //     {id: 12345 , name: "Fuel", cost:350},
    //     {id: 12345 , name: "Fuel", cost:250},
    // ];

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

    const styles = {
        width:"200px",
        color: "white"
    };

    return(
        <>
            <input
                type='text'
                className =""
                placeholder='Search...'
                onChange={handleChange}
            />
            <ul style={styles}>
                {filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
            </ul>
        </>
    );
}

export default ExpanseList;