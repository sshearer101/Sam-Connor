import React, { useState } from "react";

function FinanceCard({
    id,
    name,
    age,
    income,
    occupation,
    interests,
    profile_pic,

}) {

    const [likes, setLikes] = useState(0)
    const [comments, setComments] = useState("")

    function increaseLikes() {
        setLikes(likes + 1)
    }

    function decreaseLikes() {
        setLikes(likes - 1)
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

    function handleSubmit(e) {
        e.preventDefault();
        setComments(...comments, e)
    }

    function addComment(comment) {
        setComments(...comments, comment)
    }

    return (
        <div className="card">
            <div className="card-info">
                <br></br>
                <img src={profile_pic} alt="profile_pic"></img>
                <h3>{name}</h3>
                <h3>{age} years old</h3>
                <h3>${income}</h3>
                <h3>{occupation}</h3>
                <h3>{interests}</h3>
            </div>
            <div className="like-button" id="like-button">
                <button onClick={increaseLikes} className="like-button" id="like-button"> 👍 </button>
                <button onClick={decreaseLikes} className="like-button" id="like-button"> 👎 </button>
                <span id="send-likes" className="send-likes"> {likes} Profile Likes</span>
            </div>
            <form >
                <input
                    className="input-container"
                    type="text"
                    placeholder="comment on profile"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
                <button
                    onSubmit={handleSubmit}
                    type="submit">
                    Submit
                </button>

            </form>

        </div>

    )

}

export default FinanceCard
