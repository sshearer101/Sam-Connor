import React from "react";

function FormCard({ 
    id, 
    name, 
    age, 
    income, 
    rent, 
    living_expenses, 
    bills, 
    entertainment 
}){
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>{age}</h3>
            {/* <ul>
                <li>{income}</li>
                <li>{housing}</li>
                <li>{living_expenses}</li>
                <li>{bills}</li>
                <li>{entertainment}</li>
            </ul> */}

            <h3>{income - (living_expenses + bills + entertainment + rent)} </h3>
        </div>
    )

}

export default FormCard


