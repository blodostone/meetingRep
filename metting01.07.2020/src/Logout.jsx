import React from 'react';

// <!-- Login.jsx -->
// <button class="login btn">Login</button>

const Logout = (props) => {

    const onLogout = props.onLogout;
    return (
    <button className="login btn" onClick={onLogout}>Logout</button>
    )
}

export default Logout;