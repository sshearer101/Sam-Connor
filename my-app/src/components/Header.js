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
            <h1> Socialize Financially! </h1>
            <nav>
                <div className="log-buttons">
                    {user ? (
                        <button onClick={handleLogoutClick}>Logout</button>
                    ) : (
                        <div>
                            <Login />
                            <button onClick={handleLoginClick}>Login </button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;