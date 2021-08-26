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
            <main className="card-info">
                <h2>{name}</h2>
                <h2>{age}</h2>
                <h2>{income}</h2>
                <h2>{occupation}</h2>
                <h2>{interests}</h2>
                <img src={profile_pic} alt="profile_pic"></img>
            </main>
            <button onClick={increaseLikes} className="like-button" id="like-button"> 👍 </button>
            <button onClick={decreaseLikes} className="like-button" id="like-button"> 👎 </button>
            <span id="send-likes" className="send-likes"> {likes} Profile Likes</span>
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

export default FinanceCard;