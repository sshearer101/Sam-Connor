import React, { useState } from "react";


function FinanceForm({ addProfile }) {
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        income: "",
        occupation: "",
        interests: "",
        profile_pic: ""
    })


    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/information", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((formData) => {
                addProfile(formData);
            });
    }


    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }
    // function handleSubmit(event) {
    //     let newId = parseInt(cards[cards.length - 1].id) + 1;
    //     // let newId = cards.length + 1;

    //     // Prevent default form submission behavior
    //     event.preventDefault();

    //     // Create newCard JS object with formData and generate
    //     // a unique ID for each new object
    //     const newCard = {
    //         id: newId,
    //         title: formData.title,
    //         content: formData.content
    //         // ...formData
    //     }

    //     // Use handleAddCard from props to add the newCard JS object
    //     // to the existing array of Card objects (cards)
    //     addProfile(newCard);

    //     // Clear out input values upon form submission using formDataSetter
    //     setFormData({
    //         // key / value pairs to update
    //         title: "",
    //         content: ""
    //     });
    // }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} >
                <h1>Fill out your Profile!</h1>

                <label htmlFor="name">Name</label>
                <input
                    className="input-container"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="age">Age</label>
                <input
                    className="input-container"
                    type="text"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <label htmlFor="income">Yearly Income</label>
                <input
                    className="input-container"
                    type="text"
                    id="income"
                    value={formData.income}
                    onChange={handleChange}
                />

                <label htmlFor="occupation">Occupation</label>
                <input
                    className="input-container"
                    type="text"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                />

                <label htmlFor="interests">Interests</label>
                <input
                    className="input-container"
                    type="text"
                    id="interests"
                    value={formData.interests}
                    onChange={handleChange}
                />

                <label htmlFor="profile_pic">Profile Pic</label>
                <input
                    type="text"
                    id="profile_pic"
                    value={formData.profile_pic}
                    onChange={handleChange}
                />
                {/* 
            <label htmlFor="entertainment">Entertainment</label>
            <input
                type="text"
                id="entertainment"
                value={formData.entertainment}
                onChange={handleChange} /> */}

                <button type="submit">Add Profile</button>
            </form>
        </div>
    )

}

export default FinanceForm;