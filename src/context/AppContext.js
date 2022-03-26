import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return{
                ...state,
                expenses:[...state.expenses, action.payload],
            };
        case "DELETE_EXPENSE":
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                    ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                allowance: action.payload,
            };    
        default:
            return state;
    }
};

const initialState = {
    allowance: 22000,
    expenses: [
        {id:12, name:"shopping", cost:50},
        {id:13, name:"fun", cost:540},
    ],
};

export const AppContext =  createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
            value={{
                allowance: state.allowance,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
