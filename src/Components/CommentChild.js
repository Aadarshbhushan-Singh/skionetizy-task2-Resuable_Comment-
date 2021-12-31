import React from 'react'
import './CSS/Style.css'


export const CommentChild = (props) => {
    return (
        <div className='child'>
            <img src={props.pimage} alt="Logo" id="pimage" />
            <div id="post_details">
                <p id="name">{props.userName} <b id="post_time">{props.time} months ago</b></p> 
                
                <p id="post">{props.userPost}</p>
            </div>
        </div>
    )
}

export default CommentChild;
