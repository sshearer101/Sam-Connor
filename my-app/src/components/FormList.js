import React, { useState, useEffect } from "react";

function FormList() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        income: "",
        rent: "",
        living_expenses: "",
        bills: "",
        entertainment: ""
    })

    useEffect(() => {
        fetch("http://localhost:3000/Information")
        .then (res => res.json())
        .then (setFormData)
      }, [])
    
    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        const key = e.target.id
        const value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }



    return (
        <form onSubmit={handleSubmit} >
            <h1>Create an Account</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="age">Age</label>
            <input
                type="text"
                id="age"
                value={formData.age}
                onChange={handleChange}
            />

            <label htmlFor="income">Income</label>          
            <input
                type="text"
                id="income"
                value={formData.income}
                onChange={handleChange}
            />

            <label htmlFor="rent">Rent</label>
            <input
                type="text"
                id="Rent"
                value={formData.rent}
                onChange={handleChange}
            />

            <label htmlFor="living_expenses">Living Expenses</label>
            <input
                type="text"
                id="living_expenses"
                value={formData.living_expenses}
                onChange={handleChange}
            />

            <label htmlFor="bills">Bills</label>
            <input
                type="text"
                id="bills"
                value={formData.bills}
                onChange={handleChange}
            />

<label htmlFor="entertainment">Entertainment</label>
            <input
                type="text"
                id="entertainment"
                value={formData.entertainment}
                onChange={handleChange}
            />

        </form>

    )

}

export default FormList;