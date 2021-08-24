import React from "react";

function FormCard({
    name,
    age,
    income,
    housing,
    living_expenses,
    bills,
    entertainment
}) {

    const expenses = housing + living_expenses + bills + entertainment


    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3> {income - expenses} </h3>
        </div>
    )

}

export default FormCard;