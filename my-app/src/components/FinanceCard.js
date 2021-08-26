import React from "react";

function FinanceCard({ 
    id, 
    name, 
    age, 
    income, 
    rent, 
    housing, 
    living_expenses, 
    bills, 
    entertainment  }){
    
// const { name, age, income, housing, living_expenses, bills, entertainment } = data
// const {age, income, housing, living_expenses, bills, entertainment} = data

console.log()
    return (
        <div className="card">
            <h3>{name}</h3>
            <h2>{age}</h2>
        </div>
    )
        
}

export default FinanceCard


