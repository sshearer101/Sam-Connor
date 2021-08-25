import React from "react";
function FormCard({ userInfo }) {
    const { id, name, age, income, housing, living_expenses, bills, entertainment } = userInfo

    //Functions to display
    const expenses = housing + living_expenses + bills + entertainment


    //Returns Output. Returns Advice

    //Red Yellow Green (As far as where User is financially)
            //Red recommend 2nd Job, cutting consumption
            //Yellow Easier Fix cutting unecessary spending
            //Green Sitting good. Recommend investing to grow wealth
                    //Younger: Investing
                    //Older: Maybe enjoy life - Vacation etc.
    return (
        <div className="form-card">
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{income}</h2>
            <h2>{housing}</h2>
            <h2>{living_expenses}</h2>
            <h2>{bills}</h2>
            <h2>{entertainment}</h2>
            <h3> {{income} - expenses} </h3>
        </div>
    )
}

export default FormCard;