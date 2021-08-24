import React, {useState} from 'react'

function Header (){

const [user, setUser] = useState(null)


function handleLoginClick(){
    setUser({
        id: 1,
        username: "John"
    })
}

function handleLogoutClick(){
    setUser(null)
}

return (
    <header>
        <h1> Your Financial Planner</h1>
        <nav>
            {user ? (
                <button onClick={handleLoginClick}>Login</button>
            ) : (
                <button onClick={handleLogoutClick}>Logout</button>
            )}
        </nav>
    </header>
)
}

export default Header;