import React from 'react';

//input:(props); number
//output: JSX
const Spinner = props => {

    return (
    <span 
        style = {{
            width: props.size,
            height: props.size
        }}
        className="spinner">
    </span>
    )
}

export default Spinner;