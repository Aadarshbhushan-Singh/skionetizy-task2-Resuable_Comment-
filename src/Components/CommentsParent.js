import React from 'react'
import CommentChild from './CommentChild'
import pimage from './Images/image.jpg'

export const CommentsParent = (props) => {
    let userName1 = "Rahul Gupta";
    let userName2 = "Rahul Gupta";
    let userPost1 = "This is a great post";
    let userPost2 = "This is a great post";
    let time1=2;
    let time2=2;

    return (
        <>
            <div className='Parent'>
                <div>
                    <h1 id="heading">{props.noOfComment} Comments</h1>
                    <CommentChild userName={userName1} userPost={userPost1} pimage={pimage} time={time1} />
                    <CommentChild userName={userName2} userPost={userPost2} pimage={pimage} time={time2}/>
                </div>
            </div>
        </>

    )
}

export default CommentsParent;