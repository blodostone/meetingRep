import React from 'react';

//input: (props): function
//output: jsx
const Login = props => {
    return <button className='login btn' onClick={props.onLogin}>Login</button>
}

export default Login;