import React from 'react'

const Image=(props) =>{
    return(
        <div className="images">
            <img className="images" src={props.img} alt="pic" />
        </div>
    )
};

export default Image;