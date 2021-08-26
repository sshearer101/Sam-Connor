import React, { useState } from "react";

function FinanceCard({ 
    id, 
    name, 
    age, 
    income, 
    occupation, 
    interests, 
    profile_pic, 
    // onCommentSubmit
 }){


    
// const { name, age, income, housing, living_expenses, bills, entertainment } = data

const [likes, setLikes] = useState(0)
const [comments, setComments] = useState("") 

function handleLike( ){

}


// function handleSubmit(event){
//     event.preventDefault();
//     fetch("http://localhost:3000/information", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(comments),
//       });
//     }

    function handleSubmit (e){
        e.preventDefault();
        setComments(...comments, e)
    }


return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h1>{income}
                <button onClick={handleLike}> 👍 </button>
                                {/* Need to increment likes */}

            </h1>
                  

            <h2>{occupation}</h2>
                <button onClick={handleLike}> 👍 </button>
                {/* Need to increment likes */}

            <h2>{interests}</h2>
                <form > 
                <input 
                    className="input-container"
                    type="text"
                    value={comments}
                    onChange={(e)=> setComments(e.target.value)}
                />  
                <button onSubmit={handleSubmit} type="submit">Submit</button>
                </form> 
            <img src={profile_pic} alt="profile_pic"></img>

        </div>
    )
        
}

export default FinanceCard


