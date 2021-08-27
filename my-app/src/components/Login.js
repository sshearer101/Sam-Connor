import React, { useState } from "react"



function Login() {

    const [loginInfo, setLoginInfo] = useState({
        id: "",
        username: "",
        password: "",
        completed: false,

    })


    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        setLoginInfo({
            ...loginInfo,
            [key]: value
        })
    }

    function updateLogin(id, completed) {
        const changedLogin = loginInfo.map(login => {
            if (login.id === id) {
                return { ...login, completed }
            } else {
                return login
            }
        })
        setLoginInfo(changedLogin)
    }
    return (
        <div>
            <h1>Create your account</h1>


            <label htmlFor="username"><strong>Username:  </strong></label>
            <input
                className="input-container"
                type="text"
                id="username"
                value={loginInfo.username}
                onChange={handleChange}
            />
            <label htmlFor="password"><strong>Password:  </strong></label>
            
            <input
                className="input-container"
                type="text"
                id="password"
                value={loginInfo.password}
                onChange={handleChange}
            />

            {/* <label>
                2-Step Login Verification
                <input
                    type="checkbox"
                    onChange={(e) => updateLogin(loginInfo.id, e.target.checked)}
                    checked={loginInfo.completed}
                />
            </label> */}
        </div>

    )

}

export default Login;