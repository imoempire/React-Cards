import React from 'react'

function Name(props) {
    return(
        <div style={{border:'1px solid orangered', backgroundColor: 'grey'}}>
       <h1>{props.any}</h1>
        </div>
    )
};

export default Name;