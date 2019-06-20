import React from 'react'

const styles = {
    backgroundColor: 'gray',
    padding: '1rem',
    margin: '1rem',
    border: '1px solid black',
    borderRadius: '0.5rem'
}

const Card = (props) => {
    return (
        <div style={styles}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Card