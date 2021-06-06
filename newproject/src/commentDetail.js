import React from 'react';
// import faker from 'faker';

const CommentsDetail = e => {
    console.log(e);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={e.imageOfuser} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {e.Auth}
                </a>
                <div className="metadata">
                    <span className="date">
                        {e.time}
                    </span>
                </div>
                <div className="text">
                    {e.comment}
                </div>
            </div>

        </div>
    );
}

export default CommentsDetail;