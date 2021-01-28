import React from 'react';

//input:(props); number
//output: JSX
const Spinner = ({size}) => {
    const style = {width: size,height: size};

    return (
    <span style = {style}className="spinner"></span>)
}

export default Spinner;