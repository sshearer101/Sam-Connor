import React, { useState } from 'react'
import Login from './Login'

function Header() {

    const [user, setUser] = useState(null)

    function handleLoginClick() {
        setUser(true)
    }

    function handleLogoutClick() {
        setUser(null)
    }

    return (
        <header>
            <h1> Your Financial Planner</h1>
            <nav>
                {user ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                    <div>
                        <Login />
                        <button onClick={handleLoginClick}>Login </button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;