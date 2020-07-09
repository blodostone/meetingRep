import React from 'react'


const Spinner = ({size}) => {
    const styles = {
        display: 'inline-block',
        border: `${size}px solid #ccc`,
        borderLeftColor: 'transparent',
        animation: 'spin .5s infinite linear',
        borderRadius: '50%',
      };
     return (
        <span style={styles} className="spinner"></span>
     )
}

export default Spinner;