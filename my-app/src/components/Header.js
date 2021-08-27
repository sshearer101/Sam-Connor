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
            <div id="header">
                <img id="header-img"
                    src="https://i.pinimg.com/originals/48/eb/e7/48ebe7dffa5091a6d53fa2d7f14c7b24.png"
                    class="center"
                    alt="header-img"
                    />
            </div>
            <nav>
                <div className="log-buttons">
                    {user ? (
                        <button className="l-button" onClick={handleLogoutClick}>Logout</button>
                    ) : (
                        <div>
                            <Login />
                            <button className="l-button"onClick={handleLoginClick}>Login </button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;