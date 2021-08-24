import React, { useState } from "react";


function FormList({ addProfile, getNextId }) {
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        income: "",
        housing: "",
        living_expenses: "",
        bills: "",
        entertainment: ""
    })


    function handleSubmit(e) {
        e.preventDefault();
        addProfile(formData)
    }


    // useEffect(() => {
    //     fetch("http://localhost:3000/Information")
    //     .then (res => res.json())
    //     .then (setFormData)
    //   }, [])


    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} >
                <h1>Create an Account</h1>
                <label htmlFor="name">Name </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="age">Age </label>
                <input
                    type="text"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="income">Income </label>
                <input
                    type="text"
                    id="income"
                    value={formData.income}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="housing">Housing </label>
                <input
                    type="text"
                    id="housing"
                    value={formData.housing}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="living_expenses">Living Expenses </label>
                <input
                    type="text"
                    id="living_expenses"
                    value={formData.living_expenses}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="bills">Bills</label>
                <input
                    type="text"
                    id="bills"
                    value={formData.bills}
                    onChange={handleChange}
                />
                <br></br>
                <label htmlFor="entertainment">Entertainment </label>
                <input
                    type="text"
                    id="entertainment"
                    value={formData.entertainment}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button type="submit">Add Profile</button>
            </form>
        </div>

    )

}

export default FormList;