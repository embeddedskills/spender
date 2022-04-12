import { createSlice } from "@reduxjs/toolkit"

const initialState={ incomeData:JSON.parse(localStorage.getItem("income"))}


const incomeSlice= createSlice({
    name:"income",
    initialState,
    reducers:{
        addIncome:(state)=>{
            state.
        }

    }
})